import React from "react";
import {  Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";

export default function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="Button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
    >
      <img
        src={icon}
        alt="dumbell"
        className="body-part-icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography></Typography>
    </Stack>
  );
}
