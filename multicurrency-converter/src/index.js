import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import CurrencyProvider from './components/converter-helpers/CurrencyContext';

import "./index.css";
import App from "./App";
import theme from "./theme/theme";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CurrencyProvider>
			<ThemeProvider theme={theme}>
				<ReduxProvider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ReduxProvider>
			</ThemeProvider>
		</CurrencyProvider>
	</React.StrictMode>,
);
