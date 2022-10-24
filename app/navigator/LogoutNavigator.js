import AccountScreen from "../screens/AccountScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();
export const LogoutNavigator = () => (
  <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
    <Stack.Screen name="acc" component={AccountScreen} />
    <Stack.Screen name="hom" component={WelcomeScreen} />
  </Stack.Navigator>
);
