import { Box, Grid, Typography, useTheme } from "@mui/material";

function TestimonialCard({ name, post, description }) {
	const theme = useTheme();

	return (
		<Grid
			item
			container
			flexDirection="column"
			alignItems="center"
			sx={{
				backgroundColor: theme.palette.secondary.light,
				borderRadius: "30px",
				transition: "transform 0.2s ease-out",
				"&:hover": { transform: "scale(1.05)" },
			}}
			padding={3}
			gap={2}
		>
			<Grid item>
				<Typography variant="h5" align="center" fontWeight={600} color="white">
					{name}
				</Typography>
				<Typography variant="subtitle1" color="white" align="center">
					{post}
				</Typography>
			</Grid>
			<Grid item sx={{ background: "#fff", borderRadius: "20px", padding: 2 }}>
				<Typography variant="h6" align="center" fontWeight={400}>
					{description}
				</Typography>
			</Grid>
		</Grid>
	);
}

export default function Testimonials() {
	return (
		<Box className="testimonials" marginTop={8}>
			<Grid className="section-container" container gap={10}>
				<Grid className="header-container" item container gap={2}>
					<Grid item width="100%">
						<Typography
							variant="h3"
							align="center"
							color="secondary.light"
							fontWeight={600}
						>
							Testimonials
						</Typography>
					</Grid>
					<Grid item width="100%">
						<Typography variant="h5" align="center" color="secondary">
							Don't trust us. Trust our users. Let's listen to what they say.
						</Typography>
					</Grid>
				</Grid>
				<Grid
					className="cards-container"
					item
					container
					flexDirection="row"
					gap={4}
				>
					<Grid
						item
						container
						flexDirection="row"
						gap={3}
						flexWrap={{ md: "nowrap", xs: "wrap" }}
					>
						<TestimonialCard
							name="John Doe"
							post="Software developer"
							description={`"I've been using their currency exchange service for a while now, and I couldn't be happier. The interface is very beautiful, and the transactions are smooth and hassle-free."`}
						/>
						<TestimonialCard
							name="Sushil Mehra"
							post="Finance analyst"
							description={`"I travel frequently for work, and this website has become my go-to for exchanging currency. The convenience and reliability are unmatched. Highly recommended!"`}
						/>
					</Grid>
					<Grid
						item
						container
						flexDirection="row"
						gap={3}
						flexWrap={{ md: "nowrap", xs: "wrap" }}
					>
						<TestimonialCard
							name="Aftab Akhtar"
							post="Bank executive"
							description={`"I've used several currency exchange platforms, but this one stands out. The intuitive interface and lightning-fast transactions make it a top choice for me."`}
						/>
						<TestimonialCard
							name="Raveena Kohli"
							post="Businesswoman"
							description={`"I was skeptical at first, but after trying this service, I'm a believer. The process is so straightforward, and the rates are consistently better than what I find elsewhere."`}
						/>
					</Grid>
					<Grid
						item
						container
						flexDirection="row"
						gap={3}
						flexWrap={{ md: "nowrap", xs: "wrap" }}
					>
						<TestimonialCard
							name="Sawan Verma"
							post="CEO, Sawan enterprises"
							description={`"The customer support team is fantastic. I had a question about a transaction, and they were quick to respond and very helpful. It's great to know they're there to assist if needed."`}
						/>
						<TestimonialCard
							name="Megha Ghimire"
							post="Consultant"
							description={`"I used to spend hours comparing rates at different exchange offices. With this website, I can trust that I'm getting a fair deal every time. It's a time-saver and a money-saver!"`}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
