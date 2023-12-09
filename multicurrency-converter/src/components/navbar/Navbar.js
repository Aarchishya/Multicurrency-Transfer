import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/navbar/logo.svg";
import { authActions } from "../../store/slices/auth-slice";

const pages = [
	{ label: "Home", to: "/" },
	{ label: "Profile", to: "/profile", protected: true },
	{ label: "Dashboard", to: "/dashboard/transactions", protected: true },
	{ label: "Transfer", to: "/transferform", protected: true },
	{ label: "Converter", to: "/converter" },
	{ label: "About Us", to: "/aboutus" },
	{ label: "Comparison Chart", to: "/chart" },
];

function ResponsiveAppBar() {
	const dispatch = useDispatch();
	const theme = useTheme();
	const { isLoggedIn } = useSelector((state) => state.auth);
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	function handleLogout() {
		dispatch(authActions.logout());
	}

	return (
		<AppBar
			position="fixed"
			sx={{
				background: "rgba(0,0,0,0)",
				color: theme.palette.text.primary,
				boxShadow: "none",
				top: 10,
			}}
		>
			<Container
				maxWidth="lg"
				sx={{
					backdropFilter: "blur(5px)",
					borderRadius: theme.shape.borderRadius,
					background: "rgba(255,255,255,0.5)",
				}}
			>
				<Toolbar disableGutters>
					<Box sx={{ height: 50, display: { xs: "none", md: "flex" } }}>
						<img src={logo} alt="logo" />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) =>
								!isLoggedIn && page.protected ? null : (
									<MenuItem key={page.label} onClick={handleCloseNavMenu}>
										<Link to={page.to}>
											<Typography textAlign="center">{page.label}</Typography>
										</Link>
									</MenuItem>
								),
							)}
						</Menu>
					</Box>
					<Box
						sx={{
							height: 40,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
						}}
					>
						<img src={logo} alt="logo" />
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							gap: 1,
							marginLeft: 1,
						}}
					>
						{pages.map((page) =>
							!isLoggedIn && page.protected ? null : (
								<Link to={page.to} key={page.label}>
									<Button
										onClick={handleCloseNavMenu}
										sx={{ my: 2, display: "block" }}
									>
										{page.label}
									</Button>
								</Link>
							),
						)}
					</Box>

					<Box
						sx={{ display: { md: "flex", xs: "block" }, flexGrow: 0, gap: 1 }}
					>
						{isLoggedIn ? (
							<Button variant="outlined" onClick={handleLogout}>
								Log out
							</Button>
						) : (
							<>
								<Link to="/login">
									<Button
										variant="outlined"
										sx={{ display: { xs: "none", md: "block" } }}
									>
										Log in
									</Button>
								</Link>
								<Link to="/register">
									<Button variant="contained">Sign up</Button>
								</Link>
							</>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default ResponsiveAppBar;
