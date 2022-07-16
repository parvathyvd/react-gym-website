import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { excerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchBar = ({
  exercises,
  setExercises,
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        excerciseOptions
      );
      setCategories(["all", ...categoryList]);
      console.log("categories are", categoryList);
    };
    getCategories();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesList = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        excerciseOptions
      );
      const searchExcercise = exercisesList.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase())
        );
      });
      setExercises(searchExcercise);
      setSearch("");
      console.log(searchExcercise);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          bodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchBar;
