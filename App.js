import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigator/AuthNavigator";
import HomeNavigator from "./app/navigator/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
