import { screens } from "../routes/Screens";

const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
const { default: ListingsScreen } = require("../screens/ListingsScreen");
const { default: LoginScreen } = require("../screens/LoginScreen");

const Stack = createNativeStackNavigator();

export const LoginHomeNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"log"} component={LoginScreen} />
    <Stack.Screen name={"hom"} component={ListingsScreen} />
  </Stack.Navigator>
);
