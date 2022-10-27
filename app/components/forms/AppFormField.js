import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function AppFormField({ name, width, ...props }) {
  const { handleChange, handleBlur, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        value={values[name]}
        onBlur={handleBlur(name)}
        width={width}
        {...props}
      />
      {<ErrorMessage error={touched[name] && errors[name]} />}
    </>
  );
}
