const { apiClient } = require("./client");
const { endPoints } = require("./endPoints");

const loadCategories = () => apiClient.get(endPoints.categories);

export default {
  loadCategories,
};
