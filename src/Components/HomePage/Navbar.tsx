import { Box } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import styles from "../../StyleSheets/Navbar.module.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        height: "80px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
    >
      <Box
        maxWidth="90%"
        height="50px"
        m="1% auto"
        sx={{
          // border: "1px solid blue",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Nav left box */}
        <Box
          sx={{
            // border: "1px solid",
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src="https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg"
            alt="fraazo-logo"
            width="55%"
          />
          <Box sx={{ display: "flex" }}>
            <LocationOnIcon sx={{ color: "gray" }} />
            <Typography>CityName</Typography>
          </Box>
        </Box>

        {/* nav searchbar */}
        <Box sx={{ width: "55%" }}>
          <Box
            sx={{
              width: "90%",
              border: "1px solid #eaeaea",
              margin: "auto",
              height: "100%",
              borderRadius: "50px",
              position: "relative",
              backgroundColor: "#f9f9f9",
            }}
          >
            <input
              className={styles.searchInput}
              placeholder="Find fresh vegitables,fruits and dairy..."
            />
            <img
              className={styles.searchImg}
              src="https://www.pngall.com/wp-content/uploads/8/Vector-Search.png"
              alt="search-logo"
            />
          </Box>
        </Box>

        {/* nav right box */}
        <Box
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box className={styles.superlative}>0</Box>
            <Typography className={styles.navbarIcon}>
              <ShoppingCartIcon /> Cart
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box className={styles.superlativeCredit}>₹ 0</Box>
            <Typography className={styles.navbarIcon}>
              <AccountBalanceWalletIcon /> Credits
            </Typography>
          </Box>
          <Typography className={styles.navbarIcon}>
            <PersonIcon /> UserName
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
