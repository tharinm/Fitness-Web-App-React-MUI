import React from "react";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOption, fetchData } from "../utils/fetchData";
import ExercieCard from "./ExercieCard";

//The Pagination component enables the user to select a specific page from a range of pages.

export default function Exercises({ exercise, bodyPart, setExercise }) {
  console.log("This is exerci" + JSON.stringify(exercise));
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercise.map((exercise, index) => (
          //<p>{exercise.name}</p>
          <ExercieCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
}
