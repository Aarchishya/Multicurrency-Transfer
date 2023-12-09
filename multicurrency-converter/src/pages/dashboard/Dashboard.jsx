import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import DashboardSidebar from "./DashboardSidebar";
import Transactions from "./Transactions";
import Accounts from "./Accounts";
import Deposit from "./Deposit";
import Contact from "./Contact";
import "./dashboard.css";

const PATHNAME_PREFIX = "/dashboard/";

export default function Dashboard() {
	const { pathname } = useLocation();
	let Subpage;

	switch (pathname) {
		case PATHNAME_PREFIX + "transactions":
			Subpage = Transactions;
			break;
		case PATHNAME_PREFIX + "accounts":
			Subpage = Accounts;
			break;
		case PATHNAME_PREFIX + "deposit":
			Subpage = Deposit;
			break;
		case PATHNAME_PREFIX + "contact":
			Subpage = Contact;
			break;
		default:
			Subpage = Transactions;
			break;
	}

	return (
		<WithNavAndFooter useContainer={false}>
			<Grid display="flex" flexDirection={{ xs: "column", md: "row" }}>
				<DashboardSidebar />
				<Subpage />
			</Grid>
		</WithNavAndFooter>
	);
}
