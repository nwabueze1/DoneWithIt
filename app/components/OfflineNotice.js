import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";

export default function OfflineNotice() {
  return (
    <View style={styles.container}>
      <AppText>You device seems to be offline</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
  },
});
