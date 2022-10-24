import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

export default function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "35%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
