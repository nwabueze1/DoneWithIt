import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

export function useJwtAuth() {
  const [token, setToken] = useState("");
  //set this async storage
  const [user, setUser] = useState(null);

  const tokenReceived = (token) => {
    setToken(token);
    const decoded = jwt_decode(token);
    setUser(decoded);
    console.log(decoded);
  };

  useEffect(() => {
    //check the async storage here and update the userInfo
  }, []);

  return {
    token,
    user,
    tokenReceived,
  };
}
