import { StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText";
import { colors } from "../../config/colors";

export default function ErrorMessage({ error }) {
  return error && <AppText style={styles.text}> {error}</AppText>;
}
const styles = StyleSheet.create({
  text: {
    color: colors.primary,
  },
});
