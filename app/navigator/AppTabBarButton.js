import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

export default function AppTabBarButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: colors.primary,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
