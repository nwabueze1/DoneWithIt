import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthContext from "./app/context/AuthContext";
import { useTokenAuth } from "./app/hooks/useTokenAuth";
import AuthNavigator from "./app/navigator/AuthNavigator";
import HomeNavigator from "./app/navigator/HomeNavigator";

export default function App() {
  const { token, user: users, logout, tokenReceived } = useTokenAuth();
  const [user, setUser] = useState(users);

  useEffect(() => {
    setUser(users);
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ token, user, logout, tokenReceived, setUser }}
    >
      <NavigationContainer>
        {user ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
