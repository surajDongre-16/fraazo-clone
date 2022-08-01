import { Box, Typography } from '@mui/material';
import React from 'react'
import styles from "../../StyleSheets/CenterBox.module.css";
import Slider from './Slider';

const bestDeals = [
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VDRU12.png?width=256&height=256&format=webp",
    "frz-fw-500": "Drumstick",
    "frz-pack-size": "100 g",
    "frz-rp-10": 12,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VCHI22.png?width=256&height=256&format=webp",
    "frz-fw-500": "Green Chillies",
    "frz-pack-size": "100 g",
    "frz-rp-10": 10,
  },
  {
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/028/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Kateri Baingan (Brinjal)",
    "frz-pack-size": "250 g",
    "frz-rp-10": 25,
  },
  {
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/003/250/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Lemon (Nimboo)",
    "frz-pack-size": "100 g",
    "frz-rp-10": 10,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/ESWE13.png?width=256&height=256&format=webp",
    "frz-fw-500": "Sweet Corn (Bhutta)",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 22,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VGAV12.png?width=256&height=256&format=webp",
    "frz-fw-500": "Beans Cluster (Gavar)",
    "frz-pack-size": "250 g",
    "frz-rp-10": 39,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VCAB12.png?width=256&height=256&format=webp",
    "frz-fw-500": "Cabbage",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 39,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp",
    "frz-fw-500": "Onion",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 26,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VCAP12.png?width=256&height=256&format=webp",
    "frz-fw-500": "Green Capsicum (Shimla Mirchi)",
    "frz-pack-size": "250 g",
    "frz-rp-10": 32,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp",
    "frz-fw-500": "Coconut",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 30,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FBAN14.png?width=256&height=256&format=webp",
    "frz-fw-500": "Robusta Banana",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 47,
  },
  {
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Tomato",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 35,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp",
    "frz-fw-500": "Mosambi (Sweet Lime)",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 75,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp",
    "frz-fw-500": "Indian Avocado",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 89,
  },
  {
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/006/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Royal Gala Apple",
    "frz-pack-size": "4 pcs",
    "frz-rp-10": 140,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp",
    "frz-fw-500": "Button Mushroom",
    "frz-pack-size": "1 pkt",
    "frz-rp-10": 49,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/BPOT11.png?width=256&height=256&format=webp",
    "frz-fw-500": "Potato",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 40,
  },
  {
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/046/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "3 kg Onion",
    "frz-pack-size": "3 kg",
    "frz-rp-10": 78,
  },
];


const CenterBox = () => {
  return (
    <Box className={styles.centerBox}>
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "300",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        BEST DEALS
      </Typography>
      {/* 1st slider */}
      <Box>
        <Slider data={bestDeals} />
      </Box>
    </Box>
  );
}

export default CenterBox