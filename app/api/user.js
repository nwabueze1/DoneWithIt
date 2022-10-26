const { apiClient } = require("./client");
const { endPoints } = require("./endPoints");

const getUserInfo = (id) => apiClient.get(endPoints.user, +"/" + id);

export { getUserInfo };
