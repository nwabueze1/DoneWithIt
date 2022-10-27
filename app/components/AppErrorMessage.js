import React from "react";
import { View, StyleSheet, Button } from "react-native";
import AppButton from "./AppButton";
import AppScreen from "./AppScreen";
import AppText from "./AppText";

export default function AppErrorMessage({ onPress }) {
  return (
    <AppScreen style={styles.container}>
      <AppText>Failed to load from the server</AppText>
      <AppButton onPress={onPress} title={"retry"}></AppButton>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
