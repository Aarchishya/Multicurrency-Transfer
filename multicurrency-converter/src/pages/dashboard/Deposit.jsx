import { useEffect, useState } from "react";
import {
	Grid,
	Typography,
	Button,
	Box,
	TextField,
	FormLabel,
	Select,
	MenuItem,
	FormControl,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { depositInAccount, getAllUserAccounts } from "../../api/account";

function DepositForm() {
	const [accounts, setAccounts] = useState(null);
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);
	const navigate = useNavigate();

	useEffect(() => {
		getAllUserAccounts(userId, token)
			.then((res) => setAccounts(res.data))
			.catch((err) => console.log(err));
	}, [userId, token]);

	const [formValues, setFormValues] = useState({
		account: "",
		amount: "",
		currency: "",
	});
	const [formErrors, setFormErrors] = useState({
		account: "",
		amount: "",
		currency: "",
	});

	function handleChange(e) {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	}

	function validateForm() {
		let hasError = false;
		let errors = {
			amount: "",
			account: "",
			currency: "",
		};

		if (formValues.account === "") {
			hasError = true;
			errors.account = "Select an account";
		}

		if (formValues.amount === "" || parseFloat(formValues.amount) < 0) {
			hasError = true;
			errors.amount = "Enter a valid amount";
		}

		if (formValues.currency === "") {
			hasError = true;
			errors.currency = "Select a valid currency";
		}

		setFormErrors(errors);
		return hasError;
	}

	function handleSubmit(multiplier) {
		// if form has errors, return
		if (validateForm()) return;

		depositInAccount(formValues.account, formValues.amount * multiplier, token)
			.then(() => {
				toast.success(
					"Amount " +
						(multiplier > 0 ? "deposited" : "withdrawn") +
						" successfully!",
				);
				// navigate to account page on success
				navigate("/dashboard/accounts");
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message || "Something went wrong");
			});
	}

	return (
		<Box
			width="100%"
			sx={{ backgroundColor: "#EDD6FA" }}
			padding={3}
			borderRadius="30px"
		>
			<form style={{ width: "100%" }} onSubmit={(e) => e.preventDefault()}>
				<Grid
					container
					display="flex"
					flexDirection={{ md: "row", xs: "column" }}
					flexWrap="nowrap"
					alignItems="center"
					gap={7}
					justifyContent="space-between"
				>
					<Grid
						item
						container
						display="flex"
						flexDirection="column"
						gap={2}
						width={{ md: "50%", xs: "100%" }}
					>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="account" sx={{ marginLeft: 2 }}>
									Account
								</FormLabel>
								<Select
									fullWidth
									id="account"
									name="account"
									sx={{ backgroundColor: "#fff" }}
									value={formValues.account}
									onChange={handleChange}
									required
								>
									{accounts?.map((acc) => (
										<MenuItem key={acc.accountId} value={acc.accountId}>
											{acc.accountNumber}
										</MenuItem>
									))}
								</Select>
								<Typography color="secondary" variant="caption">
									{formErrors.account}
								</Typography>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="amount" sx={{ marginLeft: 2 }}>
									Amount
								</FormLabel>
								<TextField
									id="amount"
									placeholder="100000"
									variant="outlined"
									name="amount"
									value={formValues.amount}
									onChange={handleChange}
									required
								/>
								<Typography color="secondary" variant="caption">
									{formErrors.amount}
								</Typography>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="currency" sx={{ marginLeft: 2 }}>
									Currency (to be used for conversion)
								</FormLabel>
								<Select
									fullWidth
									id="currency"
									name="currency"
									value={formValues.currency}
									onChange={handleChange}
									sx={{ backgroundColor: "#fff" }}
								>
									<MenuItem value="INR ">INR</MenuItem>
									<MenuItem value="EUR">EUR</MenuItem>
									<MenuItem value="USD">USD</MenuItem>
								</Select>
								<Typography color="secondary" variant="caption">
									{formErrors.currency}
								</Typography>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<FormLabel htmlFor="remark" sx={{ marginLeft: 2 }}>
									Remark
								</FormLabel>
								<TextField
									id="remark"
									placeholder="Anything you want to add"
									variant="outlined"
									name="amount"
								/>
							</FormControl>
						</Grid>
					</Grid>
					<Grid
						item
						container
						display="flex"
						flexDirection="column"
						width={{ md: "50%", xs: "100%" }}
						alignItems="center"
						gap={2}
					>
						<Button
							variant="contained"
							size="large"
							sx={{ width: "75%" }}
							onClick={() => handleSubmit(1)}
						>
							Deposit
						</Button>
						<Typography variant="h6">or</Typography>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							sx={{ width: "75%" }}
							onClick={() => handleSubmit(-1)}
						>
							Withdraw
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}

export default function Deposit() {
	return (
		<Grid
			container
			paddingLeft={{ md: 6, xs: 2 }}
			paddingRight={{ md: 14, xs: 2 }}
			gap={3}
			width="100%"
			className="deposit-page"
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
						Deposit
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						sx={{ textAlign: { xs: "center", md: "initial" } }}
					>
						Add money to the accounts that you have added here.
					</Typography>
				</Grid>
				<Grid item>
					<Link to="/addaccount" style={{ textDecoration: "none" }}>
						<Button variant="contained" size="large">
							+ New account
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid item height="100%" width="100%">
				<DepositForm />
			</Grid>
		</Grid>
	);
}
