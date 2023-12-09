import { AUTH_SUBPATH, USER_SUBPATH, axiosClient } from ".";
export async function login(email, password) {
	return axiosClient.post(AUTH_SUBPATH + "/token", {
		email,
		password,
	});
}

export async function signup(userData) {
	return axiosClient.post(USER_SUBPATH + "/register", { ...userData });
}

export async function getUserByEmail(email, token) {
	return axiosClient.get(USER_SUBPATH + "/" + email, {
		headers: { Authorization: "Bearer " + token },
	});
}
export async function getUserById(id, token) {
	return axiosClient.get(USER_SUBPATH + "/" + id, {
		headers: { Authorization: "Bearer " + token },
	});
}

export async function updateUser(userDetails, id, token) {
	return axiosClient.put(
		USER_SUBPATH + "/" + id,
		{ id, ...userDetails },
		{ headers: { Authorization: "Bearer " + token } },
	);
}
