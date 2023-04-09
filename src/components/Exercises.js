import React from "react";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography, usePagination } from "@mui/material";

import { exerciseOption, fetchData } from "../utils/fetchData";
import ExercieCard from "./ExercieCard";

//The Pagination component enables the user to select a specific page from a range of pages.

export default function Exercises({ exercise, bodyPart, setExercise }) {
//  console.log("This is exerci" + JSON.stringify(exercise));
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises=exercise.slice(indexOfFirstExercise,indexOfLastExercise)

  //this e and value passed when button click default by MUI
  const paginate = (e,value) => {
    setCurrentPage(value);
    window.scroll({top:1800,behavior:'smooth'})

  }
  
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
        {currentExercises.map((exercise, index) => (
          //<p>{exercise.name}</p>
          <ExercieCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}
