import React, { useEffect, useState } from "react";
import Money from "../../assets/register/Money.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from "../../components/navbar/Navbar";
import {
	Container,
	Grid,
	Paper,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	FormHelperText,
	Select,
	MenuItem,
	Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addAccount, getAccountById, updateAccount } from "../../api/account";
import Spinner from "../../components/loading-spinner/Spinner";

const styles = {
	fullHeight: {
		height: "100%",
		width: "100%",
		marginLeft: "0px",
	},
	heading: {
		padding: "0.5rem 0",
		fontSize: "1.5rem",
	},
	subheading: {
		fontSize: "1rem",
	},
};

const AddAccount = ({ editMode }) => {
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);
	const navigate = useNavigate();
	const { id: accountId } = useParams();
	const [fetchingData, setFetchingData] = useState(editMode ? true : false);

	// fetch the data to be edited
	useEffect(() => {
		if (!editMode) return;

		getAccountById(accountId, token)
			.then((res) => {
				setFormData({
					accountHolderName: res.data.holderName,
					accountNo: res.data.accountNumber,
					balance: res.data.balance,
					accountType: res.data.type,
					currency: res.data.currency,
				});
			})
			.catch((err) => toast.error(err.message || "Something went wrong"))
			.finally(() => setFetchingData(false));
	}, [editMode, accountId, token]);

	const [formData, setFormData] = useState({
		accountHolderName: "",
		accountNo: "",
		balance: "",
		accountType: "",
		currency: "",
	});

	const [formErrors, setFormErrors] = useState({
		accountHolderName: "",
		accountNo: "",
		balance: "",
		accountType: "",
		currency: "",
	});

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...formErrors };

		// Validation logic for Account Holder Name
		if (formData.accountHolderName.trim() === "") {
			newErrors.accountHolderName = "Account Holder Name is required";
			isValid = false;
		} else {
			newErrors.accountHolderName = "";
		}

		// Validation logic for Account No
		if (formData.accountNo.trim() === "") {
			newErrors.accountNo = "Account no is required";
			isValid = false;
		} else {
			newErrors.accountNo = "";
		}

		// Validation logic for Balance
		if (isNaN(formData.balance) || formData.balance < 0) {
			newErrors.balance = "Invalid balance";
			isValid = false;
		} else {
			newErrors.balance = "";
		}

		// Validation logic for Account Type
		if (formData.accountType.trim() === "") {
			newErrors.accountType = "Account Type is required";
			isValid = false;
		} else {
			newErrors.accountType = "";
		}

		// Validation logic for currency
		if (formData.currency.trim() === "") {
			newErrors.currency = "Currency is required";
			isValid = false;
		} else {
			newErrors.currency = "";
		}

		setFormErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		const details = {
			accountNumber: formData.accountNo,
			holderName: formData.accountHolderName,
			type: formData.accountType,
			userId,
			balance: formData.balance,
			currency: formData.currency,
		};

		if (editMode) {
			updateAccount({ ...details, accountId }, token)
				.then(() => {
					toast.success("Account details updated!");
					navigate("/dashboard/accounts");
				})
				.catch((err) => toast.error(err.message || "Something went wrong"));
		} else {
			addAccount(details, token)
				.then(() => {
					toast.success("Account added successfully!");
					navigate("/dashboard/accounts");
				})
				.catch((err) => toast.error(err.message || "Something went wrong"));
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<Box>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Container maxWidth="lg">
				<Grid container spacing={0}>
					{/* Left Column */}
					<Grid item xs={12} md={6}>
						<Paper
							elevation={3}
							style={{
								padding: "2rem",
								background: "#A05CDB4D",
								color: "#fff",
								marginTop: "7rem",
								height: "70%",
								borderRadius: "60px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src={Money}
								alt="Money"
								style={{
									maxWidth: "70%",
									height: "auto",
									width: "auto",
								}}
							/>
						</Paper>
					</Grid>

					{/* Right Column - Registration Form */}
					{editMode && fetchingData ? (
						<Grid
							item
							md={6}
							xs={12}
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Spinner style={{ filter: "invert(1)" }} />
						</Grid>
					) : (
						<Grid item xs={12} md={6}>
							<Paper
								elevation={0}
								style={{ ...styles.fullHeight, padding: "2rem" }}
							>
								<form onSubmit={handleSubmit}>
									<Typography
										variant="h6"
										gutterBottom
										style={{
											...styles.heading,
											marginTop: "4rem",
											textAlign: "center",
										}}
									>
										{editMode ? "Edit account details" : "Add an account"}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										gutterBottom
										style={{ ...styles.subheading, textAlign: "center" }}
									>
										{editMode
											? "Edit the account details below."
											: "Fill in the details of the account below."}
									</Typography>
									<Grid container spacing={2.5}>
										<Grid item xs={12}>
											<TextField
												fullWidth
												label="Account Holder Name"
												variant="outlined"
												name="accountHolderName"
												value={formData.accountHolderName}
												onChange={handleChange}
												required
												style={{ borderRadius: "60px" }}
											/>
											<div style={{ color: "red" }}>
												{formErrors.accountHolderName}
											</div>
										</Grid>

										<Grid item xs={12}>
											<TextField
												fullWidth
												label="Account No"
												variant="outlined"
												name="accountNo"
												value={formData.accountNo}
												onChange={handleChange}
												required
											/>
											<div style={{ color: "red" }}>{formErrors.accountNo}</div>
										</Grid>

										<Grid item xs={12}>
											<TextField
												fullWidth
												label="Balance"
												variant="outlined"
												name="balance"
												type="number"
												value={formData.balance}
												onChange={handleChange}
												required
											/>
											<div style={{ color: "red" }}>{formErrors.balance}</div>
										</Grid>

										<Grid item xs={12}>
											<FormControl
												fullWidth
												variant="outlined"
												required
												style={{ borderRadius: "60px" }}
											>
												<InputLabel htmlFor="currency">Currency</InputLabel>
												<Select
													label="Currency"
													name="currency"
													value={formData.currency}
													onChange={handleChange}
												>
													<MenuItem value="INR">Indian Rupee</MenuItem>
													<MenuItem value="USD">US Dollar</MenuItem>
													<MenuItem value="EUR">Euro</MenuItem>
												</Select>
												<FormHelperText style={{ color: "red" }}>
													{formErrors.accountType}
												</FormHelperText>
											</FormControl>
										</Grid>

										<Grid item xs={12}>
											<FormControl
												fullWidth
												variant="outlined"
												required
												style={{ borderRadius: "60px" }}
											>
												<InputLabel htmlFor="accountType">
													Account Type
												</InputLabel>
												<Select
													label="Account Type"
													name="accountType"
													value={formData.accountType}
													onChange={handleChange}
												>
													<MenuItem value="savings">Savings</MenuItem>
													<MenuItem value="current">Current</MenuItem>
													<MenuItem value="checking">Checking</MenuItem>
													<MenuItem value="investment">Investment</MenuItem>
												</Select>
												<FormHelperText style={{ color: "red" }}>
													{formErrors.accountType}
												</FormHelperText>
											</FormControl>
										</Grid>

										<Grid item xs={12}>
											<Button
												type="submit"
												variant="contained"
												color="primary"
												fullWidth
												style={{ marginTop: "1rem" }}
											>
												{editMode ? "Update account" : "Add Account"}
											</Button>
										</Grid>
									</Grid>
									<Typography style={{ fontSize: "13px" }}>
										<Link
											to="/dashboard/accounts"
											style={{ textDecoration: "none" }}
										>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												padding="5px 50px"
												marginTop="0.8rem"
												textAlign="center"
												background="#F5F5F5"
											>
												<ArrowBackIcon style={{ marginLeft: "5px" }} />
												Go Back
											</Box>
										</Link>
									</Typography>
								</form>
								<br />
								<br />
							</Paper>
						</Grid>
					)}
				</Grid>
			</Container>
		</Box>
	);
};

export default AddAccount;
