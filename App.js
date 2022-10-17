import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ViewImageScreen />;
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
