import { useFormikContext } from "formik";
import React from "react";
import AppImageListInput from "../AppImageListInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormImagePicker({ name }) {
  const { values, touched, errors, setFieldValue } = useFormikContext();

  const handleAdd = (uri) => setFieldValue(name, [...values[name], uri]);

  const handleRemove = (uri) =>
    setFieldValue(
      name,
      values[name].filter((c) => c !== uri)
    );

  return (
    <>
      <AppImageListInput
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {<ErrorMessage error={touched[name] && errors[name]} />}
    </>
  );
}
