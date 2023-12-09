import React from "react";
import "./aboutus.css";

import {
	Container,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";

const Extrainfo = () => {
	return (
		<section className="pt-sm-5 pb-6 bg-gray-100" id="count-stats">
			<Container>
				<Grid
					className="row"
					container
					justifyContent="center"
					alignItems="center"
				>
					<Grid className="text-center" item md={3}>
						<Typography
							style={{ "font-size": "3rem", "line-height": "1.25" }}
							variant="h1"
							className="text-gradient text-info"
							id="state1"
						>
							3
						</Typography>
						<Typography variant="h5">Base currencies</Typography>
						<Typography variant="p">GBP, USD OR EUR </Typography>
					</Grid>
					<Grid
						className="text-center"
						style={{ marginLeft: "23.85px" }}
						item
						md={3}
					>
						<Typography
							style={{ "font-size": "3rem", "line-height": "1.25" }}
							variant="h1"
							className="text-gradient text-info"
						>
							<span id="state2">100</span>%
						</Typography>
						<Typography variant="h5">Reliability</Typography>
						<Typography variant="p">
							That meets quality standards required by our users{" "}
						</Typography>
					</Grid>
					<Grid
						className="text-center"
						style={{ marginLeft: "23.85px" }}
						item
						md={3}
					>
						<Typography
							style={{ "font-size": "3rem", "line-height": "1.25" }}
							variant="h1"
							className="text-gradient text-info"
						>
							<span id="state3">24</span>/7
						</Typography>
						<Typography variant="h5">Support</Typography>
						<Typography variant="p">
							Actively engage team members that finishes on time{" "}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Extrainfo;
