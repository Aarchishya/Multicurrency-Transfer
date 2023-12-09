import { Grid, IconButton } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useContext, React, useState } from "react";
import { CurrencyContext } from "../../components/converter-helpers/CurrencyContext";

const SwitchCurrency = () => {
	const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
		useContext(CurrencyContext);

	const [expanded, setExpanded] = useState(false);

	const handleSwitch = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
		setExpanded(!expanded);
	};
	return (
		<Grid item xs={12}>
			<IconButton
				onClick={handleSwitch}
				sx={{
					borderRadius: 1,
					height: "100%",
				}}
			>
				{!expanded && (
					<CompareArrowsIcon
						sx={{
							fontSize: 30,
							transform: "rotate(90deg)",
						}}
					/>
				)}
				{expanded && (
					<CompareArrowsIcon
						sx={{
							fontSize: 30,
							transform: "scale(-1, 1) rotate(90deg)",
						}}
					/>
				)}
			</IconButton>
		</Grid>
	);
};

export default SwitchCurrency;
