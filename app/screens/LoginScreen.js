import { StyleSheet, Image } from "react-native";
import React, { useContext, useState } from "react";
import AppScreen from "../components/AppScreen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { apiClient } from "../api/client";
import { endPoints } from "../api/endPoints";
import AppText from "../components/AppText";
import { defaultStyles } from "../config/styles";
import { useTokenAuth } from "../hooks/useTokenAuth";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";
import AuthContext from "../context/AuthContext";

const Schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

export default function LoginScreen() {
  const [state, setState] = useState({
    loading: false,
    hasError: false,
  });

  const { tokenReceived } = useContext(AuthContext);

  const handleLogin = async (value) => {
    setState({ ...state, loading: true });

    const { data, problem } = await apiClient.post(endPoints.auth, value);
    if (problem) {
      return setState({ ...state, loading: false, hasError: true });
    }
    tokenReceived(data.access_token);

    setState({ ...state, loading: false });
  };
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={Schema}
        onSubmit={handleLogin}
      >
        {state.hasError && (
          <AppText style={styles.errorMessage}>
            Invalid email or password
          </AppText>
        )}
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
        <SubmitButton
          title={state.loading ? "Loading..." : "Login"}
          disabled={state.loading}
        />
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
  errorMessage: {
    color: defaultStyles.colors.primary,
    textAlign: "center",
  },
});
