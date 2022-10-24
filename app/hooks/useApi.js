import { apiClient } from "../api/client";

export const useApi = () => {
  const client = apiClient;
  return {
    get: client.get,
    post: client.post,
    put: client.put,
    delete: client.delete,
    patch: client.patch,
  };
};
