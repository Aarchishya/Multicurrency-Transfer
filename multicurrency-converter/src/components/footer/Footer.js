import { Box, Container, Typography, Grid } from "@mui/material";

function FooterBlock({ title, links }) {
	return (
		<Grid item sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
			<Typography variant="body1" fontWeight={500} color="primary.light">
				{title}
			</Typography>
			{links.map((link, i) => (
				<Typography variant="body2" key={i} fontWeight={300}>
					{link}
				</Typography>
			))}
		</Grid>
	);
}

export default function Footer() {
	return (
		<Box className="footer" marginTop={3}>
			<Container
				maxWidth="lg"
				sx={{ borderTop: "1px solid #d5d5d5", paddingY: 4 }}
			>
				<Grid
					display="flex"
					container
					direction="row"
					gap={5}
					flexWrap="wrap"
					justifyContent="space-evenly"
				>
					<FooterBlock
						title={"Company"}
						links={["About Us", "Freebies", "Premium Tools", "Blogs"]}
					/>
					<FooterBlock
						title={"Resources"}
						links={["Illustrations", "Bits & Snippets", "Affiliate program"]}
					/>
					<FooterBlock
						title={"Help & Support"}
						links={[
							"Contact Us",
							"Knowledge Center",
							"Custom Development",
							"Sponsorships",
						]}
					/>
					<FooterBlock
						title={"Legal"}
						links={["Terms & Conditions", "Privacy Policy", "Licences"]}
					/>
				</Grid>
				<Box>
					<Typography
						variant="body2"
						textAlign="center"
						marginTop={4}
						fontWeight={300}
					>
						&copy; 2023. All rights reserved.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
