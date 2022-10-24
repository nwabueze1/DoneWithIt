import { LoginHomeNavigation } from "./LoginHome";

const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
const { screens } = require("../routes/Screens");
const { default: LoginScreen } = require("../screens/LoginScreen");
const { default: RegisterScreen } = require("../screens/RegisterScreen");
const { default: WelcomeScreen } = require("../screens/WelcomeScreen");

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.welcome}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={screens.login} component={LoginHomeNavigation} />
    <Stack.Screen name={screens.register} component={RegisterScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
