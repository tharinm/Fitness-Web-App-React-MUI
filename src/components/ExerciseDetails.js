import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOption, fetchData } from "../utils/fetchData";
import Details from "./Details";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";

export default function ExerciseDetails() {
  const [execiseDetails, setExeciseDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchURL =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbURL}/exercise/exercise/${id}`
      );
      setExeciseDetails(exerciseDetailsData)
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={ execiseDetails} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}
