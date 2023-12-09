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

const Executiveteam = () => {
	return (
		<section
			style={{ position: "relative", height: "auto", display: "block" }}
			className="pt-sm-8 pb-5 bg-gradient-dark-purple"
		>
			<div className="position-absolute w-100 top-0 mt-n3">
				<svg
					width="100%"
					height="127"
					viewBox="0 0 1920 127"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1920 0H0V80C385.5 158 670.053 126.376 1028 69C1302.5 25 1579 7 1920 67V0Z"
						fill="white"
					/>
				</svg>
			</div>
			<Container>
				<Grid container>
					<Grid item md={8} xs={12} className="text-start mb-5 mt-5">
						<Typography
							variant="h3"
							className="text-white position-relative z-index-1"
						>
							The Executive Team
						</Typography>
						<Typography className="text-white opacity-8 mb-0">
							Driving strategic innovation and growth to propel our company
							forward.
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item lg={6} xs={12}>
						<Card className="card-profile overflow-hidden">
							<Grid container>
								<Grid item lg={4} md={6} xs={12} className="pe-lg-0">
									<a href="javascript:;">
										<div className="p-3 pe-md-0">
											<CardMedia
												component="img"
												src="../assets/img/kal-visuals-square.jpg"
												alt="image"
												className="w-100 border-radius-md"
											/>
										</div>
									</a>
								</Grid>
								<Grid item lg={8} md={6} xs={12} className="ps-lg-0 my-auto">
									<CardContent className="card-body">
										<Typography variant="h5" className="mb-0">
											Anjali Kumari
										</Typography>
										<Typography className="text-info">Developer</Typography>
										<Typography className="mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</Typography>
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid item lg={6} xs={12}>
						<Card className="card-profile mt-lg-0 mt-5 overflow-hidden">
							<Grid container>
								<Grid item lg={4} md={6} xs={12} className="pe-lg-0">
									<a href="javascript:;">
										<div className="p-3 pe-md-0">
											<CardMedia
												component="img"
												src="../assets/img/bruce-mars.jpg"
												alt="image"
												className="w-100 border-radius-md"
											/>
										</div>
									</a>
								</Grid>
								<Grid item lg={8} md={6} xs={12} className="ps-lg-0 my-auto">
									<CardContent>
										<Typography variant="h5" className="mb-0">
											Shrutanten
										</Typography>
										<Typography className="text-info">Developer</Typography>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit..
										</Typography>
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid container spacing={2} className="mt-4">
					<Grid item lg={6} xs={12}>
						<Card className="card-profile overflow-hidden z-index-2">
							<Grid container>
								<Grid item lg={4} md={6} xs={12} className="pe-lg-0">
									<a href="javascript:;">
										<div className="p-3 pe-md-0">
											<CardMedia
												component="img"
												src="../assets/img/team-4.jpg"
												alt="image"
												className="w-100 border-radius-md"
											/>
										</div>
									</a>
								</Grid>
								<Grid item lg={8} md={6} xs={12} className="ps-lg-0 my-auto">
									<CardContent>
										<Typography variant="h5" className="mb-0">
											Malay Raj
										</Typography>
										<Typography className="text-info">Developer</Typography>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.t.
										</Typography>
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid item lg={6} xs={12}>
						<Card className="card-profile mt-lg-0 mt-5 overflow-hidden z-index-2">
							<Grid container>
								<Grid item lg={4} md={6} xs={12} className="pe-lg-0">
									<a href="javascript:;">
										<div className="p-3 pe-md-0">
											<CardMedia
												component="img"
												src="../assets/img/ivana-square.jpg"
												alt="image"
												className="w-100 border-radius-md"
											/>
										</div>
									</a>
								</Grid>
								<Grid item lg={8} md={6} xs={12} className="ps-lg-0 my-auto">
									<CardContent>
										<Typography variant="h5" className="mb-0">
											Aarchishya Kapoor
										</Typography>
										<Typography className="text-info">Developer</Typography>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</Typography>
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Executiveteam;
