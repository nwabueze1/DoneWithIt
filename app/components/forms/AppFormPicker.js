import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
  items,
  numberOfColumns,
  name,
  width,
  placeholder,
  PickerItemComponent,
}) {
  const { values, touched, errors, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        width={width}
        value={values[name]}
        icon="apps"
        onValueChange={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={touched[name] && errors[name]} />
    </>
  );
}
