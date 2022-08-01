import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";
import React from "react";
import styles from "../../StyleSheets/CenterBox.module.css";
import ProductCard from "../ProductsPage/ProductCard";

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
              <ProductCard key={index} product={item} />
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
