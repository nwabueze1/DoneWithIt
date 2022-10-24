import { screens } from "../routes/Screens";
import ListingNavigator from "./ListingNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingsEditScreen from "../screens/ListingsEditScreen";
import AccountScreen from "../screens/AccountScreen";
import { colors } from "../config/colors";

const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name={screens.home}
        component={ListingNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name={screens.listingEdit}
        component={ListingsEditScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
          tabBarLabel: "Add Listing",
          headerShown: true,
        }}
      />
      <Tab.Screen
        name={screens.account}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
