import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../../StyleSheets/CenterBox.module.css";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const useFullLinks = [
  { id: 1, text: "Privacy Policy" },
  { id: 2, text: "FAQ" },
  { id: 3, text: "Terms & Conditions" },
  { id: 4, text: "Sitemap" },
];
const cities = [
  { id: 1, text: "Mumbai" },
  { id: 2, text: "Hyderabad" },
  { id: 3, text: "Banglore" },
  { id: 4, text: "Delhi" },
  { id: 5, text: "Noida" },
  { id: 6, text: "Gurugram" },
  { id: 7, text: "Pune" },
];

const Footer2 = () => {
  return (
    <Box sx={{ marginTop: "5%" }}>
      <img
        src="https://webasset.fraazo.com/production/a72cf5cd03bd56f4be37fa1c4ce7062d.svg"
        alt="border-img"
        width="100%"
      />
      <Box className={styles.footerBody2}>
        <Box
          sx={{
            width: "90%",
            margin: "3% auto",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <img
              src="https://webasset.fraazo.com/production/f01ccf2737aa24558c3808178effa5fb.svg"
              alt="logo"
              width="250px"
            />
            <br />
            <br />
            <Typography sx={{ lineHeight: "35px", color: "#a8bfb8" }}>
              Order online vegetables & fruits directly from the farm. Fraazo is
              online platform that allows customer to get farm fresh produce
              directly from farmers.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ marginBottom: "5%" }}>
              Useful Links
            </Typography>
            {useFullLinks.map((title) => (
              <Typography
                sx={{ lineHeight: "35px", color: "#a8bfb8" }}
                key={title.id}
              >
                {title.text}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h6" sx={{ marginBottom: "5%" }}>
              Cities We Serve
            </Typography>
            {cities.map((title) => (
              <Typography
                sx={{ lineHeight: "35px", color: "#a8bfb8" }}
                key={title.id}
              >
                {title.text}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h6" sx={{ marginBottom: "5%" }}>
              Connect with us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
                color: "#a8bfb8",
                lineHeight: "35px",
              }}
            >
              <DraftsOutlinedIcon />
              <Typography>support@fraazo.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "170px",
                color: "#a8bfb8",
                margin: "5% 0 5% 0",
              }}
            >
              <CallOutlinedIcon />
              <Typography>+91 9152291522</Typography>
            </Box>
            <Typography variant="h6" sx={{ margin: "7% 0 5% 0" }}>
              Connect with us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContnet: "space-between",
                height: "40px",
              }}
            >
              <img
                className={styles.googleLogo}
                src="https://webasset.fraazo.com/production/footer-g-play.53194b32f1f28968b89e.png"
                alt="google-store"
                height="30px"
              />
              <img
                src="https://webasset.fraazo.com/production/footer-appstore.b90f071a00b68166f2af.png"
                alt="apple-store"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "90%", margin: "auto", color: "white" }}>
          <Typography variant="h3">
            Fresh Fruits & Vegetables Grocery Shopping Online
          </Typography>
          <Typography
            align="justify"
            sx={{ color: "#a8bfb8", alignText: "justify", marginTop: "2%" }}
          >
            The quality of fruits & vegetables is synonymous with its freshness,
            while getting fresh fruits and vegetables is a tedious task at times
            but with Fraazo you can get it delivered at your doorstep. Fraazo
            brings a wide range of farm fresh fruits, vegetables and dairy
            products to you, all in just a click. We currently serve about more
            than 3lacs+ happy customers in Mumbai, Navi Mumbai, Thane,
            Kalyan-Dombivli and Virar. Fraazo has made online shopping of fresh
            produce much easier with its hassle-free home delivery options. You
            can choose the delivery slot as per your choice and schedule your
            order accordingly. Or you can simply opt for the option of 90 mins
            Express Delivery and get your order delivered in not more than 90
            mins. The farm fresh fruits and vegetables on Fraazo are available
            at best prices compared to other vendors & supermarkets. Plus with
            so many exciting offers, one can save up to 20% on their Monthly
            grocery budgets. No need to wait in long queues in crowded
            supermarkets or local mandis for getting the best prices on veggies.
            Kick the stress out & just Fraazo your dose of freshness with
            savings at the comfort of your home. Fraazo directly sources fresh
            fruits and veggies from an extensive network of farmers across
            Maharashtra, hence bringing you fresh produce straight from farm to
            table in less than 18 hours. With our Safe & Hygienic packaging and
            minimal multiple handling, we ensure you get the best quality fresh
            produce.
          </Typography>
          <Typography
            align="justify"
            sx={{ color: "#a8bfb8", alignText: "justify", marginTop: "2%" }}
          >
            The fruits and vegetables are 100% hand-picked fresh from farm,
            while some products are hydroponically-grown. The wide range of
            fruits and veggies on Fraazo include more than 100+ farm fresh
            vegetables and fruits, starting from regular veggies like dudhi,
            cauliflower, beetroot, cabbage, etc. to exotic veggies like
            broccoli, lettuce etc. We also provide the essential vegetable
            combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh Cut-Veg
            Combos or Fruit Combos like Banana, Apple Combo, & more. There are a
            lot of exciting deals on vegetables & fruits, every day of the week,
            the major highlights being Monday Mandi, Veggie Wednesday,
            Freelivery Thursday & Fruit Friday.For payments, you can choose from
            the multiple payment options as Fraazo accepts Debit card, Credit
            card, UPI options like iMobile, Google Pay, 8+ e-Wallet options like
            Phonepe, JioPay, MobiKwik, Sodexo, NetBanking and Cash on Delivery
            (COD). If you ever have an issue with missing items or any quality
            issue, you can raise your concern with us in 48 hrs & we shall
            refund/ replace your product with “no-questions-asked-policy”. You
            can simply connect with our Customer Support team via Chat Support
            or Call on 9152291522.
          </Typography>

          <Typography
            sx={{
              borderTop: "1px solid",
              marginTop: "2%",
              paddingTop: "2%",
              color: "#a8bfb8",
              textAlign: "center",
            }}
          >
            © Copyrights 2021 - 2022. Fraazo. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer2;
