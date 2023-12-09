import { TRANSFER_SUBPATH, axiosClient } from ".";

export async function getAllUserTransfers(userId, token) {
	return axiosClient.get(TRANSFER_SUBPATH + "/of-user/" + userId, {
		headers: { Authorization: "Bearer " + token },
	});
}

export async function newTransfer(transferData, token) {
	return axiosClient.post(TRANSFER_SUBPATH + "/new", transferData, {
		headers: { Authorization: "Bearer " + token },
	});
}
