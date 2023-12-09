import React from "react";
import "./transfer.css";
import { Typography, Grid, Box, Button } from "@mui/material";
import exchange from "../../assets/transfer/exchange.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Transfer = ({ scrollToTestimonials }) => {
	return (
		<Box marginTop={10}>
			<div className="box">
				<div className="rectangle">
					<Grid
						container
						padding={4}
						alignItems="center"
						display="flex"
						height="100%"
					>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								height: { md: "300px", xs: "250px" },
							}}
						>
							<img src={exchange} alt="money" />
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<Typography
								variant="h2"
								fontWeight={600}
								color="white"
								mb={0.5}
								lineHeight={1.1}
							>
								Hassle-free transfers, within seconds.
							</Typography>
							<Typography color="white" variant="h5" mt={1} lineHeight={1}>
								At no additional cost. That's right.
							</Typography>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								sx={{
									padding: "10px 50px",
									mt: "1.5rem",
									display: "flex",
									alignItems: "center", // Center the text and icon vertically
								}}
								onClick={scrollToTestimonials}
							>
								Continue
								<KeyboardArrowDownIcon /> {/* Add the downward arrow icon */}
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</Box>
	);
};

export default Transfer;
