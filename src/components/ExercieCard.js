import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from "@mui/material";

export default function ExercieCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <Typography >
              {exercise.name}
          </Typography>
    </Link>
  );
}
