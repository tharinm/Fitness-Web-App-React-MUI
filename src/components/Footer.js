import React from 'react'
import { Box, Typography, Stack } from "@mui/material";
import Logo from '../assets/images/Logo-1.png'

export default function Footer() {
  return (
    <Box mt="80px" bgColor="#fff3f4">
      <Stack
        gap="40px"
        bgColor="#fff3f4"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" width="200px" height="40px" />
      </Stack>
      <Typography textAlign="center" mt="20px" pb="40px" variant="h5">
        Developed By <a href="https://www.instagram.com/tharin_uiux/" style={{textDecoration:'none'}}>TH4RIN</a>
      </Typography>
    </Box>
  );
}
