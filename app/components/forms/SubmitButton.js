import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export default function SubmitButton({ title, disabled, ...props }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      onPress={handleSubmit}
      {...props}
      title={title}
      disabled={disabled}
    />
  );
}
