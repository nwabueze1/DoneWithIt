import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { differenceInHours } from "date-fns";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { storageKeys } from "../utility/storageKeys";

export function useTokenAuth() {
  const [token, setToken] = useState("");
  const { getItem, setItem, removeItem } = useAsyncStorage(storageKeys.token);
  //set this async storage
  const [user, setUser] = useState(null);

  const tokenReceived = async (token) => {
    setToken(token);
    await setItem(token);
    const decoded = jwt_decode(token);
    setUser(decoded);
  };

  const getStoredToken = async () => {
    const storedToken = await getItem();
    if (!storedToken) return;

    const decoded = jwt_decode(storedToken);

    const diffInHours = differenceInHours(
      Date.now(),
      Number(decoded.iat) * 1000
    );
    if (diffInHours > 10) {
      setToken("");
      setUser(null);
      return await removeItem();
    }
    setToken(storedToken);
    setUser(decoded);
  };

  useEffect(() => {
    //check the async storage here and update the userInfo
    getStoredToken();
  }, []);

  return {
    token,
    user,
    tokenReceived,
  };
}
