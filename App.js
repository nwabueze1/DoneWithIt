import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppPicker from "./app/components/AppPicker";
import AppScreen from "./app/components/AppScreen";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import { colors } from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
];
export default function App() {
  const [current, setCurrent] = useState();
  return (
    <AppScreen>
      <AppTextInput placeholder="Email"></AppTextInput>
      <AppPicker
        icon={"apps"}
        placeholder={"Category"}
        items={categories}
        value={current}
        onValueChange={(newValue) => setCurrent(newValue)}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  container: {
    borderRadius: 10,
    backgroundColor: "#f8f4f4",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "500",
    margin: 10,
    fontSize: 18,
    color: "#555",
  },
});
