import React, { useState } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {exerciseOption,fetchData } from '../utils/fetchData'


export default function SearchExercises() {

    const [search, setSearch] = useState("")
    //console.log(search)

    const handleSearch = async() => {
        if (search) {
          const exerciseData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOption
            );
            console.log(exerciseData)
       }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box postion="relative" mt="50px" mr="20px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          placeholder="Search Exercises"
                  type="text"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
           // position: "absolute",
          //  right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            
                  }}
                  onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}
