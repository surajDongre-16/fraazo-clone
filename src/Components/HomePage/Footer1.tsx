import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../StyleSheets/CenterBox.module.css";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import AppleIcon from "@mui/icons-material/Apple";
const Footer1 = () => {
  const [trig, setTrig] = useState(false);

  const handleButtons = () => {
    setTrig(!trig);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        margin: "-3% auto",
        display: "flex",
      }}
    >
      <Box sx={{ width: "50%", position: "relative" }}>
        <img
          className={styles.footerImg1}
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI0IiBoZWlnaHQ9Ijc4NCIgdmlld0JveD0iMCAwIDcyNCA3ODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMTUiIGQ9Ik0xMTEuNzY4IDEyMi42Qy0xMS43NDk0IDExMy4wMzQgLTguOTc1MzQgNDIuMDkwMiAtNTIuMTA4MyAwTC0zNTYgMjIzLjg0M0MtMjkyLjYwOCA0MTUuMTYzIC0xMjguMzEgODg2LjMzOSAtODQuMzkyOSA3NjMuODk1QzIxLjIzMjEgNDI2LjI3MiAxODQuMDkgNTU3LjAwNiA0MTUuNDQgNjQ4LjgzOUM2NDYuNzg5IDc0MC42NzIgODUzLjAyOSA1ODIuODI0IDYyNC44MDQgMzAzLjY3MkMzOTYuNTc4IC05Mi40MjE5IDIzNS4yODUgMTMyLjE2NiAxMTEuNzY4IDEyMi42WiIgZmlsbD0iIzVEQzZBRCIvPgo8cGF0aCBvcGFjaXR5PSIwLjE1IiBkPSJNMjU2LjAzMiA2ODIuMTc3QzI1MS45OTkgNzExLjcxOCAyMjYuMTQ5IDcwMC44IDE4OC4zNTEgNjk1LjYzOUMxNTAuNTUyIDY5MC40NzkgMTE1LjExNyA2OTMuMDMgMTE5LjE1IDY2My40ODlDMTIzLjE4NCA2MzMuOTQ4IDE1Ny4wOTUgNjE0LjE4MyAxOTQuODk0IDYxOS4zNDRDMjMyLjY5MyA2MjQuNTA1IDI2MC4wNjUgNjUyLjYzNiAyNTYuMDMyIDY4Mi4xNzdaIiBmaWxsPSIjNURDNkFEIi8+CjxwYXRoIG9wYWNpdHk9IjAuMTUiIGQ9Ik02NjIuNzc5IDE1MS45NjFDNjUwLjUxOSAxNjQuMjIxIDYzOC43NTcgMTQzLjQ3MyA2MDEuNDc5IDEzNC45ODZDNTYyLjgxMyAxMzQuOTg2IDU1NC42ODMgMTA5LjA4MSA1NzEuMzAxIDg5LjE5MTJDNTg3LjkxOCA2OS4zMDEzIDYxMi43ODcgNjcuNDkzMSA2MzguNzU3IDg5LjE5MDNDNjY0LjcyOCAxMTAuODg4IDY3Mi4yMSAxMzQuOTg2IDY2Mi43NzkgMTUxLjk2MVoiIGZpbGw9IiM1REM2QUQiLz4KPC9zdmc+Cg=="
          alt="background"
        />
        <img
          className={styles.footerImg2}
          src="https://webasset.fraazo.com/production/app-screen.64b2c07bae4a9c5a4ec4.png"
          alt="mobile-img"
        />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          sx={{
            height: "80%",
            margin: "15% auto",
            width: "70%",
          }}
        >
          <Typography variant="h4" component="h4">
            Download The App
          </Typography>
          <br />
          <Typography sx={{ fontSize: "20px" }}>
            Enter your phone number to receive a text with a link to download
            the app
          </Typography>
          <Box
            sx={{
              border: "1px solid #eaeaea",
              width: "50%",
              borderRadius: "50px",
              height: "10%",
              marginTop: "10% ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className={`${styles.downloadButtons} ${
                trig ? styles.selectedBtn : ""
              } `}
              onClick={handleButtons}
            >
              <ShopOutlinedIcon />
              Android
            </Button>
            <Button
              className={`${styles.downloadButtons} ${
                trig ? "" : styles.selectedBtn
              }`}
              onClick={handleButtons}
            >
              <AppleIcon />
              IPhone
            </Button>
          </Box>

          <OutlinedInput
            className={styles.mobileInp}
            id="outlined-adornment-amount"
            // value={values.amount}
            //onChange={handleChange("amount")}
            placeholder="Enter your Mobile number"
            startAdornment={
              <InputAdornment position="start">91 | </InputAdornment>
            }
          />
          <Button className={styles.submitBtn}>SUBMIT</Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "10%",
              width: "80%",
              justifyContent: "space-between",
              color: "gray",
            }}
          >
            <Typography fontSize="20px">Available on</Typography>
            <img
              src="https://webasset.fraazo.com/production/googleplaystore.863bf06a3d2d326a5b94.png"
              alt="google-play"
            />
            <img
              src="https://webasset.fraazo.com/production/appstore.a8155c5772ea7d80d435.png"
              alt="apple-store"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer1;
