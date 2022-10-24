import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import Icon from "./app/components/Icon";
import { colors } from "./app/config/colors";
import { defaultStyles } from "./app/config/styles";
import AuthNavigator from "./app/navigator/AuthNavigator";
import HomeNavigator from "./app/navigator/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
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
