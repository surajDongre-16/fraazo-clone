import { Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [vegEl, setVegEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const openVeg = Boolean(vegEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

   const handleVegis = (event: React.MouseEvent<HTMLDivElement>) => {
     setVegEl(event.currentTarget);
   };

  const handleClose = () => {
    setAnchorEl(null);
  };
   const handleCloseVegis = () => {
     setVegEl(null);
   };


  return (
    <Box className={styles.mainBox}>
      <Box
        sx={{
          display: "flex",
          marginRight: "2%",
          cursor: "pointer",
          position: "relative",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={handleClick}
      >
        <Typography sx={{ fontSize: "15px", fontWeight: "100" }}>
          Fruits
        </Typography>
        <KeyboardArrowDownIcon />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Box onMouseLeave={handleClose}>
            {fruitsData.map((item) => (
              <MenuItem
                key={item.title}
                sx={{ fontSize: "15px", fontWeight: "100" }}
                onClick={handleClose}
              >
                {item.title}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Box>

      <Box
        sx={{ display: "flex", cursor: "pointer", position: "relative" }}
        id="basic-btn"
        aria-controls={openVeg ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openVeg ? "true" : undefined}
        onMouseEnter={handleVegis}
      >
        <Typography sx={{ fontSize: "15px", fontWeight: "100" }}>
          Vegitables
        </Typography>
        <KeyboardArrowDownIcon />
        <Menu
          id="basic-menu"
          anchorEl={vegEl}
          open={openVeg}
          onClose={handleCloseVegis}
          MenuListProps={{
            "aria-labelledby": "basic-btn",
          }}
        >
          <Box onMouseLeave={handleCloseVegis}>
            {veggies.map((item) => (
              <MenuItem
                key={item.title}
                sx={{ fontSize: "15px", fontWeight: "100" }}
                onClick={handleCloseVegis}
              >
                {item.title}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default CategoryBox;
