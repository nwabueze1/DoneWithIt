import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AppScreen from "./AppScreen";

export default function AppErrorMessage({ onPress }) {
  return (
    <AppScreen>
      <Text>Failed to load from the server</Text>
      <Button onPress={onPress} title={"retry"} />
    </AppScreen>
  );
}
const styles = StyleSheet.create({});
