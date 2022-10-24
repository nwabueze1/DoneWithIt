import { View, Text } from "react-native";
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { defaultStyles } from "../config/styles";

export default function AppToastProvider({ children }) {
  return (
    <ToastProvider
      duration={4000}
      placement="top"
      animationType="slide-in"
      offset={30}
      successColor={defaultStyles.colors.mediumGray}
      dangerColor={defaultStyles.colors.danger}
    ></ToastProvider>
  );
}
