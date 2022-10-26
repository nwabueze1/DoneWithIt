import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MessageButton({
  title,
  onPress,
  color = "primary",
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
      disabled={disabled}
    >
      <MaterialCommunityIcons name="reply" color={colors.white} size={35} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    // borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
