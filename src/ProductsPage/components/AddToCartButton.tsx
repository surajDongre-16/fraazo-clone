import { Button } from "@mui/material";
import { useState } from "react";
import "../ProductPage.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = ({ product }: any) => {
	const [count, setCount] = useState(0);

	const handleCart = (payload: number) => {
		// if (count >= 1 && payload === -1) setCount(count + payload);
		// else setCount(count + payload);

		//@ts-ignore
		const frazo_cart = JSON.parse(localStorage.getItem("frazo_cart")) || {};

		if (frazo_cart[product["frz-fw-500"]] === undefined && payload === 1) {
			product.cart_quantity = 1;

			frazo_cart[product["frz-fw-500"]] = product;

			localStorage.setItem("frazo_cart", JSON.stringify(frazo_cart));
		} else if (frazo_cart[product["frz-fw-500"]] && payload === 1) {
			frazo_cart[product["frz-fw-500"]].cart_quantity++;

			localStorage.setItem("frazo_cart", JSON.stringify(frazo_cart));
		} else if (
			frazo_cart[product["frz-fw-500"]] &&
			frazo_cart[product["frz-fw-500"]].cart_quantity > 1 &&
			payload === -1
		) {
			frazo_cart[product["frz-fw-500"]].cart_quantity--;

			localStorage.setItem("frazo_cart", JSON.stringify(frazo_cart));
		} else if (
			frazo_cart[product["frz-fw-500"]] &&
			frazo_cart[product["frz-fw-500"]].cart_quantity === 1 &&
			payload === -1
		) {
			delete frazo_cart[product["frz-fw-500"]];

			localStorage.setItem("frazo_cart", JSON.stringify(frazo_cart));
		}

		fetch(`http://localhost:8080/cart`, {
			method: "POST",
			body: JSON.stringify(frazo_cart),
			headers: { "content-type": "application/json" },
		})
			.then((r) => r.json())
			.then((data) =>
				setCount(() => {
					if(frazo_cart[product["frz-fw-500"]])
					return frazo_cart[product["frz-fw-500"]].cart_quantity;

					return 0
				})
			);
	};

	if (!count) {
		return (
			<Button id="addButton" variant="outlined" onClick={() => handleCart(1)}>
				<AddShoppingCartIcon sx={{ fontSize: "16px", marginRight: "6px" }} />
				add
			</Button>
		);
	} else {
		return (
			<>
				<Button
					id="reduceButton"
					variant="outlined"
					onClick={() => handleCart(-1)}
				>
					-
				</Button>
				<span>{count}</span>
				<Button
					id="increaseButton"
					variant="outlined"
					onClick={() => handleCart(1)}
				>
					+
				</Button>
			</>
		);
	}
};

export default AddToCartButton;
