import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../StyleSheets/CategoryBox.module.css";

const veggies = [
  { title: "Daily Veggies" },
  { title: "Herbs & Leafies" },
  { title: "Exotic Vegitables" },
  { title: "Cuts, Peeled & Sprouts" },
  { title: "Vegitable Combos" },
];

const fruitsData = [
  { title: "Exotic Fruits" },
  { title: "Fresh Fruits" },
  { title: "Fruit Combos" },
];

const CategoryBox = () => {
  const [fruits, setFruits] = useState(false);
  const [vegis, setVegis] = useState(false);
  const handleEnter = (val: string) => {
    if (val === "fruits") {
      setFruits(true);
      setVegis(false);
    } else if (val === "vegis") {
      setFruits(false);
      setVegis(true);
    }
  };
  const handleLeave = () => {
    setFruits(false);
    setVegis(false);
  };

  return (
    <Box className={styles.mainBox} onMouseLeave={handleLeave}>
      <Box
        sx={{
          display: "flex",
          marginRight: "2%",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseEnter={() => handleEnter("fruits")}
      >
        <Typography sx={{ fontSize: "15px", fontWeight: "100" }}>
          Fruits
        </Typography>{" "}
        <KeyboardArrowDownIcon />
        {fruits ? (
          <>
            <Box
              className={styles.subCategory}
              onMouseLeave={handleLeave}
              //   onMouseEnter={() => handleEnter("fruits")}
            >
              {fruitsData.map((item) => (
                <Typography
                  sx={{ fontSize: "15px", fontWeight: "100" }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ display: "flex", cursor: "pointer", position: "relative" }}
        onMouseEnter={() => handleEnter("vegis")}
        // onMouseLeave={handleLeave}
      >
        <Typography sx={{ fontSize: "15px", fontWeight: "100" }}>
          Vegitables
        </Typography>{" "}
        <KeyboardArrowDownIcon />
        {vegis ? (
          <>
            <Box
              className={styles.subCategoryVeggies}
              onMouseLeave={handleLeave}
            >
              {veggies.map((item) => (
                <Typography sx={{ fontSize: "15px", fontWeight: "100" }}>
                  {item.title}
                </Typography>
              ))}
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default CategoryBox;
