import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <InfinitySpin color="grey" />
      </Stack>
    </div>
  );
}
