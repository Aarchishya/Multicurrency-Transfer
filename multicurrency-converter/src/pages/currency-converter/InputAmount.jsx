import { Grid, InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { CurrencyContext } from "../../components/converter-helpers/CurrencyContext";

const InputAmount = () => {
	const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

	return (
		<Grid item xs={12}>
			<TextField
				value={firstAmount}
				onChange={(e) => setFirstAmount(e.target.value)}
				label="Amount"
				variant="outlined"
				// label="Filled"
				fullWidth
				sx={{ mb: 2, borderRadius: "60px", 
				backgroundColor: "white",
				// background: "rgb(255, 255, 255, 0.5)" 
			}}
				InputProps={{
					style: {
						fontSize: "18px",
						color: "black",
						backgroundColor: "rgb(255, 255, 255, 0)",
					},
					disableUnderline: true,
					// style: { color: "white" }
					// type: "number",
					startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
				InputLabelProps={{
					style: {
						fontSize: "18px",
						color: "black",
					},
				}}
			/>
		</Grid>
	);
};

export default InputAmount;
