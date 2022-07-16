import { Stack, Typography } from "@mui/material";
import { borderTop } from "@mui/system";
import Icon from "../assets/icons/gym.png";

const Categories = ({ category, selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: selectedCategory === category ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setSelectedCategory(category);
        window.scrollTo({ top: "1800px", left: "100px", behaviour: "smooth" });
      }}
    >
      <img src={Icon} alt="icon" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {category}
      </Typography>
    </Stack>
  );
};

export default Categories;
