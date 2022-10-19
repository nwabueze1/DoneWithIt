import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function AppFormField({ name, ...props }) {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...props}
      />
      {<ErrorMessage error={touched[name] && errors[name]} />}
    </>
  );
}
