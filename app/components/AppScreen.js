import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function AppScreen({ style, children }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
