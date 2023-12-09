import { Container, Box } from "@mui/material";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function WithNavAndFooter({
	children,
	wrapperClass,
	useContainer = true,
}) {
	return (
		<Box
			className={wrapperClass ?? ""}
			sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
		>
			<Navbar />
			<Box className="nav-spacer" height={80} />
			{useContainer ? (
				<Container maxWidth="lg" sx={{ flexGrow: 1 }}>
					{children}
				</Container>
			) : (
				children
			)}
			<Footer />
		</Box>
	);
}
