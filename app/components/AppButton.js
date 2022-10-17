import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
