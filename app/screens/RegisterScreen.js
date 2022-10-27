import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import AppScreen from "../components/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import { usePushNotification } from "../hooks/usePushNotification";
import { createUser } from "../dto/User.dto";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";
import AppText from "../components/AppText";
import { defaultStyles } from "../config/styles";
import { useApi } from "../hooks/useApi";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
export default function RegisterScreen() {
  const token = usePushNotification();
  const navigation = useNavigation();
  const { data, error, loading, request: addUser } = useApi(createUser);

  const handleSubmit = async (values) => {
    //create user
    await addUser({ ...values, pushNotificationToken: token });
    navigation.navigate(screens.login);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppScreen style={styles.container}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.image}
        />
        <AppForm
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
        >
          {error && (
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
            title={loading ? "Registering..." : "Register"}
            disabled={loading}
          />
        </AppForm>
      </AppScreen>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
});
