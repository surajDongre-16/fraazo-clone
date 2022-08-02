import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../../StyleSheets/CenterBox.module.css";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Slider from "./Slider";

const bestDeals = [
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VDRU12.png?width=256&height=256&format=webp",
    "frz-fw-500": "Drumstick",
    "frz-pack-size": "100 g",
    "frz-price-slash":15,
    "frz-priceslash-discount": "20 % OFF",
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
    "frz-priceslash-discount": "25 % OFF",
    "frz-price-slash":40,
    "frz-rp-10": 30,
  },
  {
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/003/250/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Lemon (Nimboo)",
    "frz-pack-size": "100 g",
    "frz-priceslash-discount": "25 % OFF",
    "frz-price-slash":15,
    "frz-rp-10": 10,
  },
  {
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/ESWE13.png?width=256&height=256&format=webp",
    "frz-fw-500": "Sweet Corn (Bhutta)",
    "frz-pack-size": "1 pc",
    "frz-priceslash-discount": "20 % OFF",
    "frz-price-slash":25,
    "frz-rp-10": 20,
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
    "frz-fw-500": "Green Capsicum",
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

const fruits = [
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/exotic-fruits/indian-avocado-9",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp",
    "frz-fw-500": "Indian Avocado",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 80,
    tooltiptext: "",
    "frz-price-slash":100,
    "frz-priceslash-discount": "20 % OFF",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/fresh-fruits/coconut-42",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp",
    "frz-fw-500": "Coconut",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 30,
    tooltiptext: "",
    "frz-price-slash":38,
    "frz-priceslash-discount": "25 % OFF",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/exotic-fruits/dragon-fruit-50",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FDRA1.png?width=256&height=256&format=webp",
    "frz-fw-500": "Dragon Fruit",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 89,
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/exotic-fruits/zespri-golden-kiwi-69",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FKIW1.png?width=256&height=256&format=webp",
    "frz-fw-500": "Zespri Golden Kiwi",
    "frz-pack-size": "1 pkt",
    "frz-rp-10": 135,
    tooltiptext: "(3 pcs)",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/fresh-fruits/mosambi-sweet-lime-82",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp",
    "frz-fw-500": "Mosambi (Sweet Lime)",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 75,
    "frz-price-slash":90,
    "frz-priceslash-discount": "20 % OFF",
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/fresh-fruits/muskmelon-kharbooja-84",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/FMUS1.png?width=256&height=256&format=webp",
    "frz-fw-500": "Muskmelon (Kharbooja)",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 60,
    tooltiptext: "(650 - 1200 g)",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/exotic-fruits/pear-beauty-95",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/243/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Pear Beauty",
    "frz-pack-size": "500 g",
    "frz-rp-10": 89,
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/fresh-fruits/watermelon-117",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/117/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Watermelon",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 52,
    tooltiptext: "(1.5 - 2.7 kg)",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/exotic-fruits/imported-avocado-235",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/235/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Imported Avocado",
    "frz-pack-size": "1 pc",
    "frz-rp-10": 71,
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/fruits/fruit-combo/coconut-combo-2-pcs-coconuts-445",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/445/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Coconut Combo (2 pcs Coconuts)",
    "frz-pack-size": "1 combo",
    "frz-rp-10": 60,
    tooltiptext: "",
  },
];

const vegetables = [
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/herbs-leafies/green-chillies-41",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/VCHI22.png?width=256&height=256&format=webp",
    "frz-fw-500": "Green Chillies",
    "frz-pack-size": "100 g",
    "frz-rp-10": 12,
    "frz-price-slash":15,
    "frz-priceslash-discount": "20 % OFF",
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/herbs-leafies/coriander-leaves-dhania-kothimbir-43",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/LCOR21.png?width=256&height=256&format=webp",
    "frz-fw-500": "Coriander Leaves (Dhania)",
    "frz-pack-size": "100 g",
    "frz-price-slash":30,
    "frz-priceslash-discount": "10 % OFF",
    "frz-rp-10": 27,
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/herbs-leafies/curry-leaves-48",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/LCUR11.png?width=256&height=256&format=webp",
    "frz-fw-500": "Curry Leaves",
    "frz-pack-size": "50 g",
    "frz-rp-10": 9,
    "frz-price-slash":10,
    "frz-priceslash-discount": "10 % OFF",
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/exotic-veggies/button-mushroom-83",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp",
    "frz-fw-500": "Button Mushroom",
    "frz-pack-size": "1 pkt",
    "frz-rp-10": 49,
    tooltiptext: "(Approx 200 g)",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/daily-veggies/onion-85",
    "lazy-image src":
      "https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp",
    "frz-fw-500": "Onion",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 27,
    "frz-price-slash":30,
    "frz-priceslash-discount": "10 % OFF",
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/cut-vegetables/pulao-combo-320",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/320/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Pulao Combo",
    "frz-pack-size": "200 g",
    "frz-rp-10": 80,
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/exotic-veggies/portobello-mushroom-428",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/008/454/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Portobello Mushroom",
    "frz-pack-size": "1 pkt",
    "frz-rp-10": 69,
    "frz-price-slash":15,
    tooltiptext: "(Approx 200 g)",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/daily-veggies/tomato-3730",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Tomato",
    "frz-pack-size": "1 kg",
    "frz-rp-10": 35,
    tooltiptext: "",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/vegetable-combos/masala-combo-3837",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/008/980/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Masala Combo",
    "frz-pack-size": "350g",
    "frz-rp-10": 49,
    tooltiptext: "350g",
  },
  {
    "frz-product-card href":
      "https://fraazo.com/vegetables/vegetable-combos/detox-mix-combo-500-g-carrot-500-g-beetroot-3853",
    "lazy-image src":
      "https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/177/original/data?width=256&height=256&format=webp",
    "frz-fw-500": "Detox Mix Combo (500 g Carrot + 500 g Beetroot)",
    "frz-pack-size": "1 combo",
    "frz-rp-10": 76,
    tooltiptext: "",
  },
];

const CenterBox = () => {
  return (
    <>
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

        {/* 2 Cards of Fruit and Vegitable */}
        <Box
          sx={{
            margin: "3% auto",
            display: "flex",
          }}
        >
          <Box className={styles.fruitCardBoxs}>
            <img
              className={styles.fruit}
              src="https://imagemaster.fraazo.com/fraazo-master/webban/Fruits.png"
              alt="fruits"
            />
            <img
              src="https://imagemaster.fraazo.com/fraazo-master/webban/Vegetables.png"
              alt="vegitables"
              width="47%"
            />
          </Box>
        </Box>

        {/* Fruits section */}

        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "300",
            borderBottom: "1px solid #eaeaea",
          }}
        >
          FRUITS <a href="#">(Veiw All)</a>
        </Typography>
        {/* 1st slider */}
        <Box>
          <Slider data={fruits} />
        </Box>

        {/* vegetables section */}
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "300",
            marginTop: "4%",
            borderBottom: "1px solid #eaeaea",
          }}
        >
          VEGETABLES <a href="#">(Veiw All)</a>
        </Typography>
        {/* 1st slider */}
        <Box>
          <Slider data={vegetables} />
        </Box>
      </Box>
        <Footer1 />
        <Footer2/>
    </>
  );
};

export default CenterBox;
