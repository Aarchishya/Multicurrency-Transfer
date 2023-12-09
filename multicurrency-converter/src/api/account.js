import { ACCOUNT_SUBPATH, axiosClient } from ".";

export async function addAccount(accountDetails, token) {
	return axiosClient.post(
		ACCOUNT_SUBPATH + "/new",
		{ ...accountDetails },
		{ headers: { Authorization: "Bearer " + token } },
	);
}

export async function updateAccount(accountDetails, token) {
	return axiosClient.put(
		ACCOUNT_SUBPATH + "/update",
		{ ...accountDetails },
		{ headers: { Authorization: "Bearer " + token } },
	);
}

export async function getAccountById(accountId, token) {
	return axiosClient.get(ACCOUNT_SUBPATH + "/" + accountId, {
		headers: { Authorization: "Bearer " + token },
	});
}

export async function getAllUserAccounts(userId, token) {
	return axiosClient.get(ACCOUNT_SUBPATH + "/of-user/" + userId, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
}

export async function deleteAccount(accountId, token) {
	return axiosClient.delete(ACCOUNT_SUBPATH + "/" + accountId, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
}

export async function depositInAccount(accountId, amount, token) {
	return axiosClient.post(
		ACCOUNT_SUBPATH + "/deposit/" + accountId,
		{ balance: amount },
		{ headers: { Authorization: "Bearer " + token } },
	);
}
