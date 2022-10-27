import { screens } from "../routes/Screens";
import ListingNavigator from "./ListingNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingsEditScreen from "../screens/ListingsEditScreen";
import { colors } from "../config/colors";
import MessageNavigator from "./MessageNavigator";
import AppTabBarButton from "./AppTabBarButton";

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
        options={({ navigation }) => ({
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //     name="plus-circle"
          //     color={color}
          //     size={size}
          //   />
          // ),
          tabBarButton: () => (
            <AppTabBarButton
              onPress={() => navigation.navigate(screens.listingEdit)}
            />
          ),
          tabBarLabel: "Add Listing",
          headerShown: true,
        })}
      />
      <Tab.Screen
        name={screens.account}
        component={MessageNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabel: "Account",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
