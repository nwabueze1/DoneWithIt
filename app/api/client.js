import { create } from "apisauce";
import cache from "../utility/cache";

export const apiClient = create({
  baseURL: "https://fidelis-app-done-with-it.herokuapp.com",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};
