import { Box, Grid, Typography } from "@mui/material";

import harmonyImg from "../../assets/home/harmony.png";
import explorerImg from "../../assets/home/explorer.png";
import streamlinedImg from "../../assets/home/streamlined.png";

function WCUCard({ image, heading, bodyPointsList }) {
	return (
		<Grid
			item
			container
			sx={{
				background: "rgba(99, 34, 155, 0.8)",
				borderRadius: "20px",
				transition: "transform 0.2s ease-out",
				"&:hover": { transform: "scale(1.05)" },
			}}
			padding={2}
			gap={3}
		>
			<Grid
				className="card-header"
				item
				container
				alignItems="center"
				justifyContent="space-between"
				flexWrap="nowrap"
			>
				<Grid
					className="card-image-container"
					item
					sx={{ background: "#fff", borderRadius: "50%", padding: 1 }}
				>
					<img src={image} alt="Img" width="55px" />
				</Grid>
				<Grid className="card-heading">
					<Typography
						variant="h6"
						fontWeight={600}
						color="white"
						align="center"
					>
						{heading}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				className="card-body"
				item
				sx={{ background: "#fff", borderRadius: "20px" }}
				padding={2}
				display="flex"
				flexDirection="column"
				width="100%"
				gap={2}
			>
				{bodyPointsList.map((point, i) => (
					<Typography variant="body1" key={i}>
						• {point}
					</Typography>
				))}
			</Grid>
		</Grid>
	);
}

export default function WhyChooseUs() {
	return (
		<Box className="why-choose-us" marginTop={8}>
			<Grid className="section-container" container gap={10}>
				<Grid className="header-container" item container gap={2}>
					<Grid item width="100%">
						<Typography
							variant="h3"
							align="center"
							color="primary.light"
							fontWeight={600}
						>
							Why choose us?
						</Typography>
					</Grid>
					<Grid item width="100%">
						<Typography variant="h5" align="center" color="primary">
							We are here to revolutionizing the way you manage multi-currency
							transfers.
						</Typography>
					</Grid>
				</Grid>
				<Grid
					className="cards-container"
					item
					container
					flexDirection="row"
					flexWrap={{ md: "nowrap", xs: "wrap" }}
					gap={4}
				>
					<WCUCard
						image={harmonyImg}
						heading="Multi-Currency Harmony"
						bodyPointsList={[
							"Seamlessly transfer funds between accounts holding different currencies.",
							"Efficient cross-border transactions.",
							"No more costly currency conversion fees.",
						]}
					/>
					<WCUCard
						image={explorerImg}
						heading="Exotic Currency Explorer"
						bodyPointsList={[
							"Transfer funds to and from exotic currencies effortlessly.",
							"Discover and utilize a vast array of currencies",
							"Easily to diversify your investments.",
						]}
					/>
					<WCUCard
						image={streamlinedImg}
						heading="Streamlined User Experience"
						bodyPointsList={[
							"Our intuitive and user-friendly interface makes multi-currency transfers a breeze.",
							"Enjoy a smooth and hassle-free experience.",
							"Use all state-of-the-art latest tools to transfer your money.",
						]}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
