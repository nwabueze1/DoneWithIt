import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.name}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
