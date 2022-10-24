import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppScreen from "../components/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
export default function RegisterScreen() {
  return (
    <AppScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <AppForm
        validationSchema={schema}
        onSubmit={(values) => {}}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        <AppFormField
          icon="account"
          name={"name"}
          placeholder="Name"
          autoCorrect={false}
        />
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

        <SubmitButton title={"Register"} />
      </AppForm>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
});
