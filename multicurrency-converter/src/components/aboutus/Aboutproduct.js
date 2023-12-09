import React from "react";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";
import "./aboutus.css";

const Aboutproduct = () => {
	return (
		<section className="py-7">
			<Container>
				<Grid container className="row align-items-center">
					<Grid item lg={6}>
						<Grid container spacing={4} className="row justify-content-start">
							<Grid item md={6}>
								<div className="info">
									<div className="icon icon-shape text-center">
										<svg
											width="25"
											height="25"
											viewBox="0 0 25 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.6448 3.71108C9.83903 3.31111 7.95293 3.49469 6.25822 4.23538C4.5635 4.97607 3.14767 6.23562 2.21469 7.83256C2.17118 7.90707 2.15355 7.99389 2.16458 8.07946C2.1756 8.16504 2.21465 8.24456 2.27563 8.30561L4.81469 10.8447C6.61432 8.05196 8.93289 5.63035 11.6448 3.71108Z"
												fill="#21D4FD"
												fill-opacity="0.6"
											/>
											<path
												d="M21.2891 13.3555C21.6891 15.1613 21.5055 17.0474 20.7648 18.7421C20.0241 20.4368 18.7646 21.8526 17.1676 22.7856C17.0931 22.8291 17.0063 22.8467 16.9207 22.8357C16.8351 22.8247 16.7556 22.7856 16.6946 22.7247L14.1555 20.1856C16.9482 18.386 19.3698 16.0674 21.2891 13.3555Z"
												fill="#21D4FD"
												fill-opacity="0.6"
											/>
											<path
												d="M6.23056 18.7696C5.7173 18.2576 5.02193 17.9701 4.29697 17.9701C3.57201 17.9701 2.87663 18.2576 2.36338 18.7696C1.10439 20.0282 0.795017 23.6431 0.781345 23.7962C0.776908 23.8501 0.783722 23.9044 0.801356 23.9555C0.81899 24.0067 0.84706 24.0536 0.883784 24.0933C0.920509 24.1331 0.965089 24.1648 1.0147 24.1864C1.06431 24.208 1.11786 24.219 1.17197 24.2188C1.18252 24.2188 1.19345 24.2188 1.204 24.2188C1.35713 24.2063 4.97197 23.897 6.23056 22.638C6.74292 22.1247 7.03067 21.429 7.03067 20.7038C7.03067 19.9785 6.74292 19.2829 6.23056 18.7696Z"
												fill="#2152FF"
											/>
											<path
												d="M22.2721 9.21878C23.4157 6.6887 24.0759 3.96702 24.2186 1.19417C24.2217 1.13941 24.2133 1.0846 24.1939 1.03332C24.1744 0.982034 24.1444 0.93542 24.1057 0.896512C24.0668 0.857579 24.0202 0.827215 23.9689 0.807369C23.9175 0.787524 23.8626 0.778636 23.8077 0.781278C21.0269 0.910626 18.2953 1.56289 15.7561 2.70393L22.2721 9.21878Z"
												fill="#2152FF"
											/>
											<path
												d="M15.0109 3.06342C7.30388 6.92084 4.25544 14.2556 4.21638 14.3525C4.18785 14.4235 4.18081 14.5014 4.19616 14.5764C4.21151 14.6514 4.24856 14.7202 4.30271 14.7744L10.2254 20.6974C10.2798 20.7519 10.3491 20.7891 10.4245 20.8043C10.5 20.8195 10.5783 20.8121 10.6496 20.7829C10.7461 20.7439 18.0453 17.6599 21.9117 9.96263L15.0109 3.06342ZM13.6718 13.672C13.2083 13.672 12.7552 13.5346 12.3697 13.277C11.9843 13.0195 11.6839 12.6534 11.5065 12.2252C11.3291 11.7969 11.2827 11.3257 11.3731 10.871C11.4636 10.4164 11.6868 9.99876 12.0146 9.67098C12.3423 9.3432 12.76 9.11998 13.2146 9.02954C13.6692 8.93911 14.1405 8.98552 14.5688 9.16292C14.997 9.34031 15.3631 9.64071 15.6206 10.0261C15.8781 10.4116 16.0156 10.8647 16.0156 11.3283C16.0156 11.9499 15.7687 12.546 15.3291 12.9855C14.8896 13.4251 14.2934 13.672 13.6718 13.672Z"
												fill="#2152FF"
											/>
										</svg>
									</div>
									<Typography variant="h5">
										Instant Currency Conversion
									</Typography>
									<Typography>
										Users can get accurate conversion rates and results
										instantly{" "}
									</Typography>
								</div>
							</Grid>
							<Grid item md={6}>
								<div className="info">
									<div className="icon icon-shape text-center">
										<svg
											width="25"
											height="25"
											viewBox="0 0 25 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M24.6094 8.59375V4.6875C24.6094 4.04023 24.0848 3.51562 23.4375 3.51562H1.5625C0.915234 3.51562 0.390625 4.04023 0.390625 4.6875V8.59375H24.6094Z"
												fill="#21D4FD"
												fill-opacity="0.6"
											/>
											<path
												d="M0.390625 12.1094V20.3126C0.390625 20.9598 0.915234 21.4844 1.5625 21.4844H23.4375C24.0848 21.4844 24.6094 20.9598 24.6094 20.3126V12.1094H0.390625ZM9.375 17.5782H3.90625C3.69062 17.5782 3.51562 17.4032 3.51562 17.1876C3.51562 16.9719 3.69062 16.7969 3.90625 16.7969H9.375C9.59062 16.7969 9.76562 16.9719 9.76562 17.1876C9.76562 17.4032 9.59062 17.5782 9.375 17.5782ZM21.0937 17.5782H19.5312C19.3156 17.5782 19.1406 17.4032 19.1406 17.1876C19.1406 16.9719 19.3156 16.7969 19.5312 16.7969H21.0937C21.3094 16.7969 21.4844 16.9719 21.4844 17.1876C21.4844 17.4032 21.3094 17.5782 21.0937 17.5782Z"
												fill="#2152FF"
											/>
										</svg>
									</div>
									<Typography variant="h5">Global Money Made Easy</Typography>
									<Typography>
										Make global financial management straightforward and
										accessible
									</Typography>
								</div>
							</Grid>
						</Grid>
						<Grid container spacing={4} className="row justify-content-start">
							<Grid item md={6}>
								<div className="info">
									<div className="icon icon-shape text-center">
										<svg
											width="25"
											height="25"
											viewBox="0 0 25 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12.1094 8.86871L1.17188 4.96246V19.5312C1.17188 19.6964 1.27578 19.8437 1.43125 19.8988L12.1094 23.7125V8.86871Z"
												fill="#21D4FD"
												fill-opacity="0.6"
											/>
											<path
												d="M12.5 8.17888L23.4247 4.27732L12.6071 1.18669C12.5368 1.16677 12.4629 1.16677 12.3926 1.18669L1.57544 4.27732L12.5 8.17888Z"
												fill="#2152FF"
											/>
											<path
												d="M12.8906 8.86871V23.7125L23.5687 19.8988C23.7242 19.8437 23.8281 19.6964 23.8281 19.5312V4.96246L12.8906 8.86871Z"
												fill="#21D4FD"
												fill-opacity="0.6"
											/>
										</svg>
									</div>
									<Typography variant="h5">Currency Confidence Now</Typography>
									<Typography>
										Reliability to make informed financial decisions{" "}
									</Typography>
								</div>
							</Grid>
							<Grid item md={6}>
								<div className="info">
									<div className="icon icon-shape text-center">
										<svg
											width="25"
											height="25"
											viewBox="0 0 25 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M24.5969 0H13.3065C13.0836 0 12.9033 0.199554 12.9033 0.446429V12.0536C12.9033 12.2254 12.9924 12.3812 13.1315 12.4558C13.1876 12.4857 13.2473 12.5 13.3065 12.5C13.3965 12.5 13.4856 12.467 13.5586 12.4022L17.4803 8.92857H24.5969C24.8199 8.92857 25.0001 8.72902 25.0001 8.48214V0.446429C25.0001 0.199554 24.8199 0 24.5969 0Z"
												fill="#21D4FD"
												fill-opacity="0.6"
											/>
											<path
												d="M6.85486 15.1786C8.85912 15.1786 10.4839 13.3797 10.4839 11.1607C10.4839 8.94174 8.85912 7.14288 6.85486 7.14288C4.8506 7.14288 3.22583 8.94174 3.22583 11.1607C3.22583 13.3797 4.8506 15.1786 6.85486 15.1786Z"
												fill="#2152FF"
											/>
											<path
												d="M11.9315 17.9259C10.9048 17.4871 9.19073 16.9643 6.85484 16.9643C4.51895 16.9643 2.80484 17.4871 1.77823 17.9259C0.714516 18.3804 0 19.5478 0 20.8313V24.5536C0 24.8005 0.180242 25 0.403226 25H13.3065C13.5294 25 13.7097 24.8005 13.7097 24.5536V20.8313C13.7097 19.5478 12.9952 18.3804 11.9315 17.9259Z"
												fill="#2152FF"
											/>
										</svg>
									</div>
									<Typography variant="h5">Seamless Currency Switch</Typography>
									<Typography>
										Making international transactions and financial planning a
										breeze.{" "}
									</Typography>
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						lg={4}
						sx={{ marginLeft: "auto", marginTop: { lg: 0, xs: 4 } }}
					>
						<Card sx={{ boxShadow: "lg" }}>
							<CardMedia
								sx={{
									px: 3,
									pt: 3,
									position: "relative",
									zIndex: 1,
									"& .blur-shadow-image": {
										display: "block",
									},
								}}
								className="card-media"
								component="img"
								height="auto"
								image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/funny.jpg"
								alt="img-blur-shadow"
							/>
							<CardContent>
								<Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
									Global Finance Simplified
								</Typography>
								<Typography>
									"Exchange rate uncertainty can disrupt finances. Our app
									ensures confidence with real-time rates, helping users
									navigate international transactions smoothly."
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Aboutproduct;
