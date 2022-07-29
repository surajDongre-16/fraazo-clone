import { Box } from "@mui/system";
import React from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";
import "./ProductPage.css";

const ProductPage = () => {
	return (
		<>
			<Box id="productNav">
				<Box>Fruits</Box>
				<Box>Vegetables</Box>
			</Box>
            <Box id="ProductPageBody">
                <Filter/>
                <ProductList/>
            </Box>
		</>
	)
};

export default ProductPage;
