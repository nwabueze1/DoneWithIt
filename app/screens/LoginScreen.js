import { StyleSheet, Image, Alert } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";

const Schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

export default function LoginScreen() {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={Schema}
        onSubmit={(values) => {
          Alert.alert(values.email, values.password);
        }}
      >
        <AppFormField
          name={"email"}
          placeholder="Email"
          icon={"email"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name={"password"}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          icon={"lock"}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
