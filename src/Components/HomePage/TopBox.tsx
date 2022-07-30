import { Box } from '@mui/material'
import React from 'react'
import styles from "../../StyleSheets/TopBox.module.css";
const TopBox = () => {
  return (
    <Box className={styles.topBox}>
      <Box sx={{ width: "65%"}}>
        <img
          src="https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png"
          alt="homepage-img"
          width="100%"
          height='100%'
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          marginLeft: "auto",
          height:"100%",
          justifyContent:"space-around"

        }}
      >
        <img
          src="https://webasset.fraazo.com/production/Web1.ab035db9ab9fe7b21326.png"
          alt="img-2"
        />
        <img
          src="https://webasset.fraazo.com/production/Web2.3f0b675c24dcb702b13d.png"
          alt="img-3"
        />
        <img
          src="https://webasset.fraazo.com/production/Web3.e2495d9eb26022ba0363.png"
          alt="img-4"
        />
      </Box>
    </Box>
  );
}

export default TopBox