import axios from "axios";

export const BACKEND_URL = "http://localhost:8080/api/v1";
export const AUTH_SUBPATH = "/jwt";
export const USER_SUBPATH = "/user";
export const ACCOUNT_SUBPATH = "/account";
export const TRANSFER_SUBPATH = "/transfer";

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
});

axiosClient.interceptors.response.use(undefined, (error) => {
	let msg;
	if (error.message) msg = error.message;
	else if (error.response) msg = error.response.data.message;
	else if (error.request) msg = "Network error";
	else msg = "Something went wrong";

	error.message = msg;
	return Promise.reject(error);
});
