import { Box } from "@mui/material";
import Carousel from "better-react-carousel";
import React, { useEffect, useState } from "react";
import React from "react";

import { useSelector } from "react-redux";
import styles from "../../StyleSheets/CenterBox.module.css";
import ProductCard from "../ProductsPage/ProductCard";

interface dataItem {
  image: string;
  product_name: string;
  packsize: string;
  price: number;
}

const Slider = ({ data }: any) => {

  //@ts-ignore
	const cartItem=useSelector(store=>store.AppReducer.cart)

  return (
    <Box
      sx={{
        // width: "100%",
        marginTop: "3%",
        height: "auto",
       
      }}
    >
      <Carousel cols={5} rows={1} gap={20} loop={false}>
        {data.map((item: dataItem, index: number) => (
          <Carousel.Item key={index}>
            <Box className={styles.carousalBox}>
              <ProductCard key={index} cartItem={cartItem} product={item} />
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
