import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/context/AuthContext";
import { useSentry } from "./app/hooks/useSentry";
import { useTokenAuth } from "./app/hooks/useTokenAuth";
import AuthNavigator from "./app/navigator/AuthNavigator";
import HomeNavigator from "./app/navigator/HomeNavigator";
import { myTheme } from "./app/navigator/navigationTheme";

export default function App() {
  const { token, user: users, logout, tokenReceived } = useTokenAuth();
  const [user, setUser] = useState(users);
  const { initializeSentry } = useSentry();
  const [isLogin, setIsLoggedIn] = useState(() => {
    return token.length > 0 ? true : false;
  });

  const changeLogState = () => {
    setIsLoggedIn(!isLogin);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    logout();
    setUser(null);
  };
  useEffect(() => {
    setUser(users);
    initializeSentry();
  }, [token, isLogin]);
  return (
    <>
      <OfflineNotice />
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
        <NavigationContainer theme={myTheme}>
          {isLogin ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
