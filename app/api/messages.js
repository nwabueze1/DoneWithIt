const { apiClient } = require("./client");
const { endPoints } = require("./endPoints");

const getMessages = async (userId) =>
  await apiClient.get(endPoints.message + "/" + userId);

const addMessages = async (data) => {
  return apiClient.post(endPoints.message, data);
};

export { getMessages, addMessages };
