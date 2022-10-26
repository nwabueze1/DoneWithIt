import { useState } from "react";

export const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const { ok, data: apiData } = await apiFunc(...args);
    setLoading(false);

    if (!ok) setError(true);

    setData(apiData);
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
