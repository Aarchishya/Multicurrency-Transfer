import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import sidebarBg from "../../assets/dashboard/sidebar-bg.png";
import transactionsIcon from "../../assets/dashboard/transactions.svg";
import accountsIcon from "../../assets/dashboard/accounts.svg";
import depositIcon from "../../assets/dashboard/deposit.svg";
import contactIcon from "../../assets/dashboard/contact.svg";

export const SIDEBAR_DIMENSIONS = {
	minWidth: { md: "350px", xs: "unset" },
	width: { md: "350px", xs: "unset" },
	height: { md: "83vh", xs: "unset" },
};

const links = [
	{
		label: "Transactions",
		icon: transactionsIcon,
		to: "/dashboard/transactions",
		height: "27px",
	},
	{
		label: "Accounts",
		icon: accountsIcon,
		to: "/dashboard/accounts",
		height: "24px",
	},
	{
		label: "Deposit",
		icon: depositIcon,
		to: "/dashboard/deposit",
		height: "28px",
	},
	{
		label: "Contact Us",
		icon: contactIcon,
		to: "/dashboard/contact",
		height: "28px",
	},
];

function SidebarLink({ label, icon, to, height }) {
	return (
		<Box
			component={NavLink}
			to={to}
			display="flex"
			alignItems="center"
			paddingY={1.5}
			paddingX={2}
			width="max-content"
			borderRadius="30px"
			sx={{
				textDecoration: "none",
				"&:hover": { background: "rgba(195, 149, 228, 0.5)" },
				"&.active": { background: "rgb(195, 149, 228)" },
			}}
		>
			<Box width={34} height={height} marginRight={1}>
				<img src={icon} alt={label} />
			</Box>
			<Typography variant="h6" color="#fff">
				{label}
			</Typography>
		</Box>
	);
}

export default function DashboardSidebar() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				position: { md: "sticky", xs: "initial" },
				top: "80px",
				background: `url(${sidebarBg})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
				borderRadius: { md: "0 60px 60px 0", xs: "0px" },
				marginBottom: { xs: 3, md: 0 },
				zIndex: 1,
				...SIDEBAR_DIMENSIONS,
			}}
			className="dashboard-sidebar"
		>
			<Box
				sx={{
					background: "rgba(165, 97, 214, 0.8)",
					width: "100%",
					paddingY: 3,
					paddingX: { md: 4, xs: 2 },
					borderRadius: { md: "0 45px 45px 0", xs: "0px" },
					backdropFilter: { md: "blur(4px)", xs: "blur(1px)" },
				}}
			>
				<Grid container direction="column" gap={0.75}>
					<Grid item>
						<Typography
							variant="h4"
							fontWeight={600}
							marginLeft={{ md: 1.5, xs: 0 }}
							marginBottom={{ md: 0.5, xs: 0 }}
							sx={{ textAlign: { md: "initial", xs: "center" } }}
							color="#fff"
						>
							Dashboard
						</Typography>
					</Grid>
					<Grid
						item
						container
						gap={0.75}
						justifyContent={{ xs: "space-between", md: "initial" }}
					>
						{links.map((link, i) => (
							<Grid item key={i}>
								<SidebarLink {...link} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
