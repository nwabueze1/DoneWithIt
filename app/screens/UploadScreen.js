import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import { colors } from "../config/colors";

export default function UploadScreen({ progress, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} />

        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
