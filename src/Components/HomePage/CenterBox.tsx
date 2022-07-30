import { Box, Typography } from '@mui/material';
import React from 'react'
import styles from "../../StyleSheets/CenterBox.module.css";
import Slider from './Slider';

const bestDeals = [
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/VDRU12.png?width=256&height=256&format=webp",
    "product_name": "Drumstick",
    "packsize": "100 g",
    "price": 12,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/VCHI22.png?width=256&height=256&format=webp",
    "product_name": "Green Chillies",
    "packsize": "100 g",
    "price": 10,
  },
  {

    "image":"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/028/original/data?width=256&height=256&format=webp",
    "product_name": "Kateri Baingan (Brinjal)",
    "packsize": "250 g",
    "price": 25,
  },
  {

    "image":"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/003/250/original/data?width=256&height=256&format=webp",
    "product_name": "Lemon (Nimboo)",
    "packsize": "100 g",
    "price": 10,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/ESWE13.png?width=256&height=256&format=webp",
    "product_name": "Sweet Corn (Bhutta)",
    "packsize": "1 pc",
    "price": 22,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/VGAV12.png?width=256&height=256&format=webp",
    "product_name": "Beans Cluster (Gavar)",
    "packsize": "250 g",
    "price": 39,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/VCAB12.png?width=256&height=256&format=webp",
    "product_name": "Cabbage",
    "packsize": "1 pc",
    "price": 39,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp",
    "product_name": "Onion",
    "packsize": "1 kg",
    "price": 26,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/VCAP12.png?width=256&height=256&format=webp",
    "product_name": "Green Capsicum (Shimla Mirchi)",
    "packsize": "250 g",
    "price": 32,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp",
    "product_name": "Coconut",
    "packsize": "1 pc",
    "price": 30,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/FBAN14.png?width=256&height=256&format=webp",
    "product_name": "Robusta Banana",
    "packsize": "1 kg",
    "price": 47,
  },
  {

    "image":"https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp",
    "product_name": "Tomato",
    "packsize": "1 kg",
    "price": 35,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp",
    "product_name": "Mosambi (Sweet Lime)",
    "packsize": "1 kg",
    "price": 75,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp",
    "product_name": "Indian Avocado",
    "packsize": "1 pc",
    "price": 89,
  },
  {

    "image":"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/006/original/data?width=256&height=256&format=webp",
    "product_name": "Royal Gala Apple",
    "packsize": "4 pcs",
    "price": 140,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp",
    "product_name": "Button Mushroom",
    "packsize": "1 pkt",
    "price": 49,
  },
  {

    "image":"https://imagemaster.fraazo.com/fraazo-master/products/BPOT11.png?width=256&height=256&format=webp",
    "product_name": "Potato",
    "packsize": "1 kg",
    "price": 40,
  },
  {

    "image":"https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/046/original/data?width=256&height=256&format=webp",
    "product_name": "3 kg Onion",
    "packsize": "3 kg",
    "price": 78,
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