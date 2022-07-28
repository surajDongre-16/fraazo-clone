import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import PaymentPage from "./PaymentPage";
import ProductsPage from "./ProductsPage";
import SingleProductPage from "./SingleProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route
        path="/cart"
        element={
          <ReqAuth>
            <CartPage />
          </ReqAuth>
        }
      />
      <Route path="payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default MainRoutes;
