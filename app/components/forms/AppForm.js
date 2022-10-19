import { View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";

export default function AppForm({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
