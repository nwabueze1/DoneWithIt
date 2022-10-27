import { useState } from "react";

export const useApi = (apiFunc, noArray = false) => {
  const [data, setData] = useState(() => (noArray ? null : []));
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const { ok, data: apiData } = await apiFunc(...args);
    setLoading(false);

    if (!ok) {
      // console.log("failed");
      return setError(true);
    }

    setData(apiData);
    setError(false);
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
