import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { colors } from "./app/config/colors";
import { defaultStyles } from "./app/config/styles";
import { useTokenAuth } from "./app/hooks/useTokenAuth";
import AuthNavigator from "./app/navigator/AuthNavigator";
import HomeNavigator from "./app/navigator/HomeNavigator";

export default function App() {
  const { token, user } = useTokenAuth();

  useEffect(() => {}, [token]);
  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    flex: 1,
    width: "100%",
    padding: 12,
    backgroundColor: "white",
    borderLeftWidth: 10,
    borderLeftColor: defaultStyles.colors.primary,
    height: 100,
  },
  toastText: {
    color: colors.mediumGray,
  },
});
