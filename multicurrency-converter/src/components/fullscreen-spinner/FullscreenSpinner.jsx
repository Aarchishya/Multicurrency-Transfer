import { Box } from "@mui/material";

import Spinner from "../loading-spinner/Spinner";

export default function FullscreenSpinner() {
	return (
		<>
			<Box
				className="backdrop"
				sx={{
					position: "fixed",
					inset: 0,
					zIndex: 98,
					background: "#4d4d4d70",
					backdropFilter: "blur(1px)",
				}}
			></Box>
			<Box
				sx={{ inset: 0, position: "fixed", zIndex: 99 }}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Spinner />
			</Box>
		</>
	);
}
