const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
const { screens } = require("../routes/Screens");
const {
  default: ListingDetailsScreen,
} = require("../screens/ListingDetailsScreen");
const { default: ListingsScreen } = require("../screens/ListingsScreen");

const Stack = createNativeStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.listing}
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={screens.listingDetails}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default ListingNavigator;
