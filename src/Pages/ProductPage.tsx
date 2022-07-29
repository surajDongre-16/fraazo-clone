import { Box } from "@mui/system";
import React from "react";
import Filter from "../Components/ProductsPage/Filter";
import ProductList from "../Components/ProductsPage/ProductList";
import "../Components/ProductsPage/ProductPage.css";

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
