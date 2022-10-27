const { apiClient } = require("./client");
const { endPoints } = require("./endPoints");

const authLogin = (data) => apiClient.post(endPoints.auth, data);

export { authLogin };
