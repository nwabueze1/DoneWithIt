import { colors } from "../config/colors";
import MessageDetailsScreen from "../screens/MessageDetailsScreen";
import MyListingScreen from "../screens/MyListingScreen";

const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
const { screens } = require("../routes/Screens");
const { default: AccountScreen } = require("../screens/AccountScreen");
const { default: MessagesScreen } = require("../screens/MessagesScreen");

const Stack = createNativeStackNavigator();

const MessageNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.mAccount}
      component={AccountScreen}
      options={{ title: "My Account" }}
    />
    <Stack.Screen
      name={screens.mMessage}
      component={MessagesScreen}
      options={{
        title: "My messages",
        headerTintColor: colors.mediumGray,
      }}
    />
    <Stack.Screen
      name={screens.messageDetail}
      component={MessageDetailsScreen}
      options={{ title: "Message Detail" }}
    />
    <Stack.Screen
      name={screens.myListings}
      component={MyListingScreen}
      options={{
        title: "My Listings",
      }}
    />
  </Stack.Navigator>
);

export default MessageNavigator;
