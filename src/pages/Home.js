import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export default function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercise={setExercise}
        exercise={exercise}
        bodyPart={bodyPart}
      />
    </Box>
  );
}
