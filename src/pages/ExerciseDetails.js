import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOption, fetchData, youtubeOption } from "../utils/fetchData";
import Detail from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

export default function ExerciseDetails() {
  const [execiseDetail, setExeciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExeciseDetail(exerciseDetailsData);
      //console.log(exerciseDetailsData);
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,
        youtubeOption
      );

      //pass the videos
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbURL}/exercises/target/${exerciseDetailsData.target}`,
        exerciseOption
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbURL}/exercises/equipment/${exerciseDetailsData.equipment}`,
        exerciseOption
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExerciseData();
  }, [id]);

  console.log(exerciseVideos);

  return (
    <Box>
      {/* <Details exerciseDetail={execiseDetails} /> */}
      <Detail exerciseDetail={execiseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={execiseDetail.name}
      />
      {/* <ExerciseVideos /> */}
      {/* <SimilarExercises /> */}
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
}
