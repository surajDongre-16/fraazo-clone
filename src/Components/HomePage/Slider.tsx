import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";
import React from "react";
import styles from "../../StyleSheets/CenterBox.module.css";

interface dataItem {
  image: string;
  product_name: string;
  packsize: string;
  price: number;
}

const Slider = ({ data }: any) => {
  return (
    <Box
      sx={{
        // width: "100%",
        marginTop: "2%",
        height: "auto",
      }}
    >
      <Carousel cols={5} rows={1} gap={20} loop={false}>
        {data.map((item: dataItem, index: number) => (
          <Carousel.Item key={index}>
            <Box className={styles.carousalBox}>
              <img src={item.image} alt="carousal-img" />
              <Box sx={{display:"flex",flexDirection:"column",margin:"5%"}} >
                <Typography fontWeight={"300"}>{item.product_name}</Typography>
                <Typography fontSize={"12px"}>{item.packsize}</Typography>
                <Typography fontSize={"12px"}>{item.price}</Typography>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
