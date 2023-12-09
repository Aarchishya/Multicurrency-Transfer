import React, { useEffect, useState } from "react";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import {
	Typography,
	Grid,
	Box,
	Paper,
	TextField,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from "@mui/material";
import { useSelector } from "react-redux";

import sendSvg from "../../assets/transferForm/send.svg";
import { newTransfer } from "../../api/transfer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllUserAccounts } from "../../api/account";

const TransferForm = () => {
	const navigate = useNavigate();
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);
	const [accounts, setAccounts] = useState([]);
	const [formData, setFormData] = useState({
		senderAmount: "",
		senderAccountNumber: "",
		senderCurrency: "",
		receiverAmount: "",
		receiverAccountNumber: "",
		receiverCurrency: "",
	});
	const [formErrors, setFormErrors] = useState({
		senderAmount: "",
		senderAccountNumber: "",
		senderCurrency: "",
		receiverAmount: "",
		receiverAccountNumber: "",
		receiverCurrency: "",
	});

	useEffect(() => {
		getAllUserAccounts(userId, token)
			.then((res) => setAccounts(res.data))
			.catch((err) => toast.error(err.message));
	}, [userId, token]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		newTransfer({ ...formData, userId }, token)
			.then(() => {
				toast.success("Transfer successful!");
				navigate("/dashboard/transactions");
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message || "Something went wrong");
			});
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;

		if (
			name === "senderAmount" &&
			formData.receiverCurrency !== "" &&
			formData.senderCurrency !== ""
		) {
			setFormData({
				...formData,
				[name]: value,
				receiverAmount: parseFloat(value) * 83,
			});
		} else if (
			(name === "receiverCurrency" &&
				formData.senderAmount !== "" &&
				formData.senderCurrency !== "") ||
			(name === "senderCurrency" &&
				formData.receiverCurrency !== "" &&
				formData.senderAmount !== "")
		) {
			setFormData({
				...formData,
				[name]: value,
				receiverAmount: parseFloat(formData.senderAmount) * 83,
			});
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	function validateForm() {
		let isValid = true;
		let errors = {
			senderAmount: "",
			senderAccountNumber: "",
			senderCurrency: "",
			receiverAccountNumber: "",
			receiverCurrency: "",
		};

		if (
			formData.senderAmount.trim() === "" ||
			parseFloat(formData.senderAmount.trim()) <= 0
		) {
			isValid = false;
			errors.senderAmount = "Invalid amount entered";
		}

		if (formData.senderAccountNumber.trim() === "") {
			isValid = false;
			errors.senderAccountNumber = "Select an account";
		}

		if (formData.senderCurrency.trim() === "") {
			isValid = false;
			errors.senderCurrency = "Select a currency";
		}

		if (formData.receiverAccountNumber.trim() === "") {
			isValid = false;
			errors.receiverAccountNumber = "Account number is required";
		}

		if (formData.receiverCurrency.trim() === "") {
			isValid = false;
			errors.receiverCurrency = "Select a currency";
		}

		setFormErrors(errors);
		return isValid;
	}

	return (
		<WithNavAndFooter>
			<Box
				mt={3}
				sx={{
					background:
						"linear-gradient(90deg,rgba(197, 158, 230, 0.9),rgba(237, 115, 125, 0.7))",
					borderRadius: "60px",
					paddingX: 5,
					paddingBottom: 12,
					paddingTop: 5,
				}}
			>
				<Box>
					<Typography
						variant="h2"
						fontWeight={600}
						align="center"
						color="primary.light"
						mb={1}
					>
						Transfer funds
					</Typography>
					<Typography
						variant="h5"
						align="center"
						mb={5}
						color="primary"
						fontWeight={500}
					>
						Send money to any account without worrying about currencies.
					</Typography>
				</Box>
				<Grid
					container
					gap={3}
					alignItems="center"
					justifyContent="center"
					flexWrap={{ xs: "wrap", md: "nowrap" }}
				>
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						md={5}
					>
						<Paper
							elevation={4}
							style={{
								padding: "2.5rem",
								background: "#C59EE6",
								color: "#333", // Text color
								borderRadius: "60px",
								width: "100%",
							}}
						>
							<Typography
								variant="h5"
								sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
								color="primary.light"
							>
								Sender
							</Typography>
							<form>
								<TextField
									name="senderAmount"
									label="Amount"
									variant="outlined"
									fullWidth
									type="number"
									InputProps={{ inputProps: { min: 0 } }}
									required
									onChange={handleFormChange}
									value={formData.senderAmount}
									sx={{
										background: "white",
										borderRadius: "60px",
										mb: 2,
									}}
								/>
								{formErrors.senderAmount !== "" && (
									<Typography mb={2} ml={2} color="secondary" fontWeight={500}>
										{formErrors.senderAmount}
									</Typography>
								)}
								<FormControl
									variant="outlined"
									fullWidth
									required
									sx={{
										background: "white",
										borderRadius: "60px",
										mb: 2,
									}}
								>
									<InputLabel>Account</InputLabel>
									<Select
										name="senderAccountNumber"
										label="Account (Select type)"
										onChange={handleFormChange}
										value={formData.senderAccountNumber}
									>
										{accounts?.map((acc) => (
											<MenuItem
												key={acc.accountNumber}
												value={acc.accountNumber}
											>
												{acc.accountNumber}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{formErrors.senderAccountNumber !== "" && (
									<Typography mb={2} ml={2} color="secondary" fontWeight={500}>
										{formErrors.senderAccountNumber}
									</Typography>
								)}
								<FormControl
									variant="outlined"
									fullWidth
									required
									sx={{
										background: "white",
										borderRadius: "60px",
										mb: 2,
									}}
								>
									<InputLabel>Base currency</InputLabel>
									<Select
										name="senderCurrency"
										label="Currency (Base currency select type)"
										onChange={handleFormChange}
										value={formData.senderCurrency}
									>
										<MenuItem value="INR">Indian Rupee</MenuItem>
										<MenuItem value="USD">US Dollar</MenuItem>
										<MenuItem value="EUR">Euro</MenuItem>
									</Select>
								</FormControl>
								{formErrors.senderCurrency !== "" && (
									<Typography mb={2} ml={2} color="secondary" fontWeight={500}>
										{formErrors.senderCurrency}
									</Typography>
								)}
							</form>
						</Paper>
					</Grid>
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							":hover": { transform: "scale(1.15)" },
							":active": { transform: "scale(1.05)" },
							transition: "transform 0.2s ease-out",
							cursor: "pointer",
						}}
						md={2}
						onClick={handleSubmit}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "#C7E7B6",
								borderRadius: "50%",
								width: "130px",
								height: "130px",
							}}
						>
							<img src={sendSvg} alt="Send" style={{ height: "80px" }} />
						</Box>
						<Typography variant="h6" color="white">
							Send
						</Typography>
					</Grid>
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						md={5}
					>
						<Paper
							elevation={4}
							style={{
								padding: "2.5rem",
								background: "#ED737D",
								color: "#333",
								borderRadius: "60px",
								width: "100%",
							}}
						>
							<Typography
								variant="h5"
								sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
								color="secondary.dark"
							>
								Receiver
							</Typography>
							<form>
								<TextField
									name="receiverAmount"
									label="Converted Amount"
									variant="outlined"
									fullWidth
									type="number"
									InputProps={{ inputProps: { min: 0 } }}
									required
									onChange={handleFormChange}
									value={formData.receiverAmount}
									sx={{
										background: "white",
										borderRadius: "60px",
										mb: 2,
									}}
									disabled
								/>
								<TextField
									name="receiverAccountNumber"
									label="Account"
									variant="outlined"
									fullWidth
									type="number"
									InputProps={{ inputProps: { min: 0 } }}
									required
									onChange={handleFormChange}
									value={formData.receiverAccountNumber}
									sx={{
										background: "white",
										borderRadius: "60px",
										mb: 2,
									}}
								/>
								{formErrors.receiverAccountNumber !== "" && (
									<Typography mb={2} ml={2} color="secondary" fontWeight={500}>
										{formErrors.receiverAccountNumber}
									</Typography>
								)}
								<FormControl
									variant="outlined"
									fullWidth
									required
									sx={{
										background: "white",
										borderRadius: "60px",
										mb: 2,
									}}
								>
									<InputLabel>Conversion currency</InputLabel>
									<Select
										name="receiverCurrency"
										label="Currency (Base currency select type)"
										onChange={handleFormChange}
										value={formData.receiverCurrency}
									>
										<MenuItem value="INR">Indian Rupee</MenuItem>
										<MenuItem value="USD">US Dollar</MenuItem>
										<MenuItem value="EUR">Euro</MenuItem>
									</Select>
								</FormControl>
								{formErrors.receiverCurrency !== "" && (
									<Typography mb={2} ml={2} color="secondary" fontWeight={500}>
										{formErrors.receiverCurrency}
									</Typography>
								)}
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</WithNavAndFooter>
	);
};

export default TransferForm;
