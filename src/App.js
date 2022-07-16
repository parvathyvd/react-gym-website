import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m={"auto"}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                exercises={exercises}
                setExercises={setExercises}
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route path="/exercise/:id" exact element={<ExcerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
