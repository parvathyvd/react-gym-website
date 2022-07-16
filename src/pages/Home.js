import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";

const Home = ({ exercises, setExercises, categories, setCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchBar
        exercises={exercises}
        setExercises={setExercises}
        categories={categories}
        setCategories={setCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        bodyParts
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        categories={categories}
        setCategories={setCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Box>
  );
};

export default Home;
