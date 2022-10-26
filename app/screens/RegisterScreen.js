import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import AppScreen from "../components/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import { usePushNotification } from "../hooks/usePushNotification";
import { createUser } from "../dto/User.dto";
import { apiClient } from "../api/client";
import { endPoints } from "../api/endPoints";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";
import AppText from "../components/AppText";
import { defaultStyles } from "../config/styles";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
export default function RegisterScreen() {
  const [hasRegistered, setHasRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = usePushNotification();
  const navigation = useNavigation();

  const handleSubmit = async (values) => {
    setLoading(true);
    setHasRegistered(false);
    //create user
    const user = createUser({ ...values, pushNotificationToken: token });

    const { ok, data } = await apiClient.post(endPoints.user, user);
    setLoading(false);
    if (!ok) return setHasRegistered(true);

    navigation.navigate(screens.login);
  };

  return (
    <AppScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <AppForm
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        {hasRegistered && (
          <AppText style={{ color: defaultStyles.colors.primary }}>
            Email already registered
          </AppText>
        )}
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
        <SubmitButton
          title={loading ? "Loading..." : "Register"}
          disabled={loading}
        />
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
