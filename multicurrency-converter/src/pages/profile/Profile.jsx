import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Button, TextField, Typography, Grid } from "@mui/material";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getUserByEmail, getUserById, updateUser } from "../../api/auth";
import { orange } from "@mui/material/colors";

const EditProfile = () => {
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);

	// Set values for profile values
	useEffect(() => {
		getUserById(userId, token)
			.then((res) =>
				setProfileData({
					firstName: res.data.firstName,
					lastName: res.data.lastName,
					email: res.data.email,
					password: res.data.password,
					profilePicture: res.data.firstName,
				}),
			)
			.catch((err) => {
				console.log(err);
				toast.error(err.message || "Something went wrong");
			});
	}, [userId, token]);

	// State to store user profile data
	const [profileData, setProfileData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		profilePicture: "", // Set the initial image URL here
	});

	// To store user profile errors
	const [profileErrors, setProfileErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		profilePicture: "",
	});

	// Form Validation
	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...profileErrors };

		// Validation logic for First Name
		if (profileData.firstName.trim() === "") {
			newErrors.firstName = "First Name is required";
			isValid = false;
		} else {
			newErrors.firstName = "";
		}

		// Validation logic for Last Name
		if (profileData.lastName.trim() === "") {
			newErrors.lastName = "Last Name is required";
			isValid = false;
		} else {
			newErrors.lastName = "";
		}

		// Validation logic for Email
		if (
			!profileData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			newErrors.email = "Invalid Email";
			isValid = false;
		} else {
			newErrors.email = "";
		}

		// Validation logic for Password
		if (profileData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
			isValid = false;
		} else {
			newErrors.password = "";
		}

		setProfileErrors(newErrors);
		return isValid;
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProfileData({
			...profileData,
			[name]: value,
		});
	};

	const handleFileUpload = (e) => {
		// Handle file upload and set the profile picture
		// FileReader to preview the image if needed
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		// API requests to save the changes
		const details = {
			userId,
			email: profileData.email,
			firstName: profileData.firstName,
			lastName: profileData.lastName,
			password: profileData.password,
		};
		updateUser(details, userId, token)
			.then(() => {
				toast.success("User details updated!");
			})
			.catch((err) => toast.error(err.message || "Something went wrong"));

		console.log("Profile data submitted:", profileData);
	};

	return (
		<WithNavAndFooter>
			<div className="profilePaper" style={{ padding: "9px", marginTop: "0px" }}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} align="center">
							<Avatar
								alt="Profile Picture"
								variant="outlined"
								sx={{ width: 165, height: 165, backgroundColor: "#401664" }}
							>
								<Typography variant="h1" align="center" fontWeight="thin">
									{profileData.firstName[0]}
									{profileData.lastName[0]}
								</Typography>
							</Avatar>
							{/* <input
								type="file"
								accept="image/*"
								name="profilePicture"
								onChange={handleFileUpload}
							/> */}
						</Grid>
						<Grid item xs={12} align="center">
							<Typography variant="h4" align="center">
								{profileData.firstName} {profileData.lastName}
							</Typography>
						</Grid>
						<Grid item xs={12} align="center">
							<Typography variant="h5" align="center">
								You can edit your profile here!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="First Name"
								name="firstName"
								value={profileData.firstName}
								onChange={handleInputChange}
								required
							/>
							<div style={{ color: "red" }}>{profileErrors.firstName}</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Last Name"
								name="lastName"
								value={profileData.lastName}
								onChange={handleInputChange}
								required
							/>
							<div style={{ color: "red" }}>{profileErrors.lastName}</div>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Email Address"
								name="email"
								value={profileData.email}
								onChange={handleInputChange}
								required
							/>
							<div style={{ color: "red" }}>{profileErrors.email}</div>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								type="password"
								label="Password"
								name="password"
								value={profileData.password}
								onChange={handleInputChange}
							/>
							<div style={{ color: "red" }}>{profileErrors.password}</div>
						</Grid>
					</Grid>
					<Grid item xs={12} textAlign="center">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							// size="medium"
							style={{ marginTop: "20px" }}
							className="submit-btn"
						>
							Save Changes
						</Button>
					</Grid>
				</form>
			</div>
		</WithNavAndFooter>
	);
};

export default EditProfile;
