import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultStyles } from "../../config/styles";

export default function AppTextInput({ icon, ...props }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={25}
          color={defaultStyles.colors.mediumGray}
        />
      )}
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    ...defaultStyles.text,
  },
});
