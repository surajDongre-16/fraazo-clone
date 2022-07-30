import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React, { useState } from "react";
import "./ProductPage.css";
import AddIcon from "@mui/icons-material/Add";

const Filter = () => {
	const [expanded, setExpanded] = useState<string | false>("panel1");

	const handleChange = (x: string) => {
		setExpanded(false);
	};

	return (
		<Box id="Filter">
			<Accordion
                disableGutters
                sx={{boxShadow:"none",marginBottom:"0px",borderBottom:" 1px solid rgb(235, 235, 235)"}}
				expanded={expanded === "panel1"}
				onChange={() => handleChange("panel1")}
			>
				<AccordionSummary
					sx={{ flexDirection: "row-reverse" }}
					expandIcon={<AddIcon sx={{ color: "#5dc6ad" }} />}
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<Typography>Fruits</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: "0px" }}>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Exotic Fruits
					</Box>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Fresh Fruits
					</Box>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Fruite Combos
					</Box>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Mangoes
					</Box>
				</AccordionDetails>
			</Accordion>

			<Accordion
                disableGutters
                sx={{boxShadow:"none",marginBottom:"0px",borderBottom:" 1px solid rgb(235, 235, 235)"}}
				expanded={expanded !== "panel1"}
				onChange={() => handleChange("panel1")}
			>
				<AccordionSummary
					sx={{ flexDirection: "row-reverse" }}
					expandIcon={<AddIcon sx={{ color: "#5dc6ad" }} />}
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<Typography>Fruits</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: "0px" }}>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Exotic Fruits
					</Box>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Fresh Fruits
					</Box>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Fruite Combos
					</Box>
					<Box className="filterchild">
						<ArrowForwardIosSharpIcon
							sx={{ fontSize: "12px", marginRight: "6px" }}
						/>
						Mangoes
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Filter;
