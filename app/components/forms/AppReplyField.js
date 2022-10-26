import { useFormikContext } from "formik";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors } from "../../config/colors";

export default function AppReplyField({ name = "message", placeholder }) {
  const { touched, errors, values, handleChange, handleBlur } =
    useFormikContext();
  return (
    <View style={styles.container}>
      <TextInput
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={styles.input}
        placeholder={placeholder}
        numberOfLines={2}
      />
      {touched[name] && (
        <Text style={{ color: colors.primary }}>{errors[name]}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: colors.mediumGray,
    borderWidth: 1,
    backgroundColor: colors.lightGray,
    marginTop: 3,
  },
  form: {
    width: "100%",
  },
});
