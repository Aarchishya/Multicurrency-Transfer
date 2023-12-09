import {
	Grid,
	Table,
	Typography,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Button,
	Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { getAllUserTransfers } from "../../api/transfer";
import Spinner from "../../components/loading-spinner/Spinner";

function TransactionsTable({ transactions }) {
	return (
		<TableContainer className="table-container">
			<Table>
				<TableHead>
					<TableRow className="table-row">
						<TableCell className="table-cell purple-bottom-border" rowSpan={2}>
							<Typography variant="h6">#</Typography>
						</TableCell>
						<TableCell
							className="table-cell purple-left-border purple-bottom-border sender"
							colSpan={3}
						>
							<Typography variant="h6">Sender</Typography>
						</TableCell>
						<TableCell
							className="table-cell red-left-border red-bottom-border receiver"
							colSpan={3}
						>
							<Typography variant="h6">Receiver</Typography>
						</TableCell>
					</TableRow>
					<TableRow className="table-row">
						<TableCell className="table-cell purple-left-border purple-bottom-border sender">
							<Typography variant="body1" fontWeight={500}>
								Amount
							</Typography>
						</TableCell>
						<TableCell className="table-cell purple-bottom-border sender">
							<Typography variant="body1" fontWeight={500}>
								Currency
							</Typography>
						</TableCell>
						<TableCell className="table-cell purple-bottom-border sender">
							<Typography variant="body1" fontWeight={500}>
								Account number
							</Typography>
						</TableCell>
						<TableCell className="table-cell red-left-border red-bottom-border receiver">
							<Typography variant="body1" fontWeight={500}>
								Amount
							</Typography>
						</TableCell>
						<TableCell className="table-cell red-bottom-border receiver">
							<Typography variant="body1" fontWeight={500}>
								Currency
							</Typography>
						</TableCell>
						<TableCell className="table-cell red-bottom-border receiver">
							<Typography variant="body1" fontWeight={500}>
								Account number
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{transactions.map((transaction, i) => (
						<TableRow key={i} className="table-row table-body-row">
							<TableCell className="table-cell">
								<Typography variant="body1">{i + 1}</Typography>
							</TableCell>
							<TableCell className="table-cell sender">
								<Typography variant="body1">
									{transaction.senderAmount}
								</Typography>
							</TableCell>
							<TableCell className="table-cell sender">
								<Typography variant="body1">
									{transaction.senderCurrency}
								</Typography>
							</TableCell>
							<TableCell className="table-cell sender">
								<Typography variant="body1">
									{transaction.senderAccountNumber}
								</Typography>
							</TableCell>
							<TableCell className="table-cell receiver">
								<Typography variant="body1">
									{transaction.receiverAmount}
								</Typography>
							</TableCell>
							<TableCell className="table-cell receiver">
								<Typography variant="body1">
									{transaction.receiverCurrency}
								</Typography>
							</TableCell>
							<TableCell className="table-cell receiver">
								<Typography variant="body1">
									{transaction.receiverAccountNumber}
								</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default function Transactions() {
	const [transfers, setTransfers] = useState(null);
	const userId = useSelector((state) => state.auth.userData.userId);
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		getAllUserTransfers(userId, token)
			.then((res) => setTransfers(res.data))
			.catch((err) => {
				toast.error(err.message || "Something went wrong");
			});
	}, [userId, token]);

	return (
		<Grid
			container
			paddingLeft={{ md: 6, xs: 2 }}
			paddingRight={{ md: 14, xs: 2 }}
			gap={3}
			width="100%"
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
						Transactions
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						sx={{ textAlign: { xs: "center", md: "initial" } }}
					>
						All transactions that you have made appear here.
					</Typography>
				</Grid>
				<Grid item>
					<Link to="/transferform">
						<Button variant="contained" size="large">
							+ New transaction
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid item width="100%" minHeight="70%">
				{transfers == null ? (
					<Box
						display="flex"
						height="100%"
						width="100%"
						alignItems="center"
						justifyContent="center"
					>
						<Spinner style={{ filter: "invert(1)" }} />
					</Box>
				) : transfers.length === 0 ? (
					<Box
						display="flex"
						height="100%"
						width="100%"
						justifyContent="center"
					>
						<Typography variant="h6" align="center" color="secondary">
							You have not made any transactions.
						</Typography>
					</Box>
				) : (
					<TransactionsTable transactions={transfers} />
				)}
			</Grid>
		</Grid>
	);
}
