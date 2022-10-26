import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthContext from "./app/context/AuthContext";
import { useTokenAuth } from "./app/hooks/useTokenAuth";
import AuthNavigator from "./app/navigator/AuthNavigator";
import HomeNavigator from "./app/navigator/HomeNavigator";
import MessageDetailsScreen from "./app/screens/MessageDetailsScreen";

export default function App() {
  const { token, user: users, logout, tokenReceived } = useTokenAuth();
  const [user, setUser] = useState(users);
  const [isLogin, setIsLoggedIn] = useState(() => {
    return token.length > 0 ? true : false;
  });

  const changeLogState = () => {
    setIsLoggedIn(!isLogin);
  };

  const logOut = () => {
    logout();
    setIsLoggedIn(false);
    setUser(null);
  };
  useEffect(() => {
    setUser(users);
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        tokenReceived,
        setUser,
        changeLogState,
        logOut,
      }}
    >
      <NavigationContainer>
        {isLogin ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
