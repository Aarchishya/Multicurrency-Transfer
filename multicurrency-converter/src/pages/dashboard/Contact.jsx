import {
	Grid,
	Typography,
	Button,
	Box,
	TextField,
	FormLabel,
	// Select,
	// MenuItem,
	FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
	const [contactData, setContactData] = useState({
		name: "",
		// lastName: "",
		email: "",
		description: "",
	});
	const [contactErrors, setContactErrors] = useState({
		name: "",
		// lastName: "",
		email: "",
		description: "",
	});
	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...contactErrors };

		// Validation logic for Email
		if (
			!contactData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
		) {
			newErrors.email = "Invalid Email";
			isValid = false;
		} else {
			newErrors.email = "";
		}

		// Validation logic for Descrition
		if (contactData.description.length > 250) {
			newErrors.description = "Description must be at less than 250 characters";
			isValid = false;
		} else {
			newErrors.description = "";
		}

		setContactErrors(newErrors);
		return isValid;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setContactData({
			...contactData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		toast.success("Query registered!");
		setContactData({ name: "", email: "", description: "" });
	};

	return (
		<Box
			width="100%"
			sx={{ backgroundColor: "#EDD6FA" }}
			padding={3}
			borderRadius="30px"
		>
			<form style={{ width: "100%" }} onSubmit={handleSubmit}>
				<Grid
					container
					display="flex"
					flexWrap="nowrap"
					alignItems="center"
					flexDirection="column"
					gap={3}
					justifyContent="space-between"
				>
					<Grid
						item
						container
						gap={2}
						flexWrap="nowrap"
						justifyContent="space-between"
					>
						<Grid item width="48%">
							<FormControl fullWidth>
								<FormLabel htmlFor="name" sx={{ marginLeft: 2 }}>
									Name
								</FormLabel>
								<TextField
									// id="name"
									placeholder="Your Name"
									variant="outlined"
									name="name"
									value={contactData.name}
									onChange={handleInputChange}
									required
								/>
								<div style={{ color: "red" }}>{contactErrors.name}</div>
							</FormControl>
						</Grid>
						<Grid item width="48%">
							<FormControl fullWidth>
								<FormLabel htmlFor="email" sx={{ marginLeft: 2 }}>
									Email
								</FormLabel>
								<TextField
									// id="email"
									placeholder="you@example.com"
									variant="outlined"
									name="email"
									type="email"
									value={contactData.email}
									onChange={handleInputChange}
									required
								/>
								<div style={{ color: "red" }}>{contactErrors.email}</div>
							</FormControl>
						</Grid>
					</Grid>
					<Grid item width="100%">
						<FormControl fullWidth>
							<FormLabel htmlFor="description" sx={{ marginLeft: 2 }}>
								How can we help you?
							</FormLabel>
							<TextField
								// id="description"
								placeholder="Describe your problem in 250 words or less."
								variant="outlined"
								name="description"
								// type="email"
								rows={7}
								multiline
								sx={{ borderRadius: "0px" }}
								value={contactData.description}
								onChange={handleInputChange}
								required
							/>
							<div style={{ color: "red" }}>{contactErrors.description}</div>
						</FormControl>
					</Grid>
					<Grid item width="100%" display="flex" justifyContent="center">
						<Button
							type="submit"
							variant="contained"
							size="large"
							sx={{ width: "30%" }}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}

export default function Contact() {
	return (
		<Grid
			container
			paddingLeft={{ md: 6, xs: 2 }}
			paddingRight={{ md: 14, xs: 2 }}
			gap={3}
			width="100%"
			className="contact-page"
		>
			<Grid
				item
				container
				display="flex"
				alignItems="center"
				justifyContent={{ md: "space-between", xs: "center" }}
				gap={2}
			>
				<Grid item>
					<Typography
						variant="h3"
						fontWeight={600}
						sx={{ textAlign: { xs: "center", md: "initial" } }}
					>
						Contact Us
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						sx={{ textAlign: { xs: "center", md: "initial" } }}
					>
						For further questions, contact us using our contact form.
					</Typography>
				</Grid>
			</Grid>
			<Grid item height="100%" width="100%">
				<ContactForm />
			</Grid>
		</Grid>
	);
}
