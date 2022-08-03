import { Box } from "@mui/system";
import React from "react";
import Filter from "../Components/ProductsPage/Filter";
import ProductList from "../Components/ProductsPage/ProductList";
import "../Components/ProductsPage/ProductPage.css";
import Navbar from "../Components/HomePage/Navbar"
import Footer2 from "../Components/HomePage/Footer2";

const ProductPage = () => {

	window.scrollTo({top:0,behavior:"smooth"})

	return (
		<>
			<Navbar/>
			{/* <Box id="productNav">
				<Box>Fruits</Box>
				<Box>Vegetables</Box>
			</Box> */}
            <Box id="ProductPageBody">
                <Filter/>
                <ProductList/>
            </Box>
			<Footer2/>
		</>
	)
};

export default ProductPage;
