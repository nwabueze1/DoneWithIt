import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import { colors } from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";

export default function WelcomeScreen() {
  const navigator = useNavigation();

  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell Your Goods Without Hassle</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Login"}
          onPress={() => navigator.navigate(screens.login)}
        />
        <AppButton
          title={"Register"}
          color={"secondary"}
          onPress={() => navigator.navigate(screens.register)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    paddingHorizontal: 10,
    width: "100%",
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  logo: { width: 100, height: 100 },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.grey,
    paddingVertical: 10,
  },
});
