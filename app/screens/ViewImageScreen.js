import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={colors.white}
        style={styles.closeIcon}
        name="close"
        size={40}
      />
      <MaterialCommunityIcons
        color={colors.primary}
        style={styles.deleteIcon}
        name="trash-can"
        size={40}
      />

      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
