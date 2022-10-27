const { apiClient } = require("./client");
const { endPoints } = require("./endPoints");

const getUserInfo = (id) => apiClient.get(endPoints.user + "/" + id);

const createUser = (value) => apiClient.post(endPoints.user, value);

export { getUserInfo, createUser };
