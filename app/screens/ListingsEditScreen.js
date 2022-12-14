import { Alert, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppScreen from "../components/AppScreen";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import { useLocation } from "../hooks/useLocation";
import { useApi } from "../hooks/useApi";
import AuthContext from "../context/AuthContext";
import { addListing } from "../api/listings";
import categoryApi from "../api/category";
import AppText from "../components/AppText";
import { defaultStyles } from "../config/styles";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";
import UploadScreen from "./UploadScreen";

const schema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required().min(1).max(10000),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

export default function ListingsEditScreen() {
  const [error, setError] = useState(null);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { user } = useContext(AuthContext);
  const { location } = useLocation();
  const { request: loadCategories, data: category } = useApi(
    categoryApi.loadCategories
  );

  const navigation = useNavigation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    setError(null);
    const result = await addListing(
      {
        ...listing,
        location: location,
        userId: user.id,
      },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok)
      return setError(result.originalError.response.data.message[0]);
    alert("success");
    resetForm();
  };
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <ScrollView>
      <AppScreen style={styles.container}>
        {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
        <UploadScreen visible={uploadVisible} progress={progress} />
        <AppForm
          initialValues={{
            title: "",
            description: "",
            category: "",
            price: "",
            images: [],
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {error && <AppText style={styles.errorText}>{error}</AppText>}
          <AppFormImagePicker name={"images"} />
          <AppFormField maxLength={255} name={"title"} placeholder="Title" />
          <AppFormField
            name={"price"}
            placeholder="Price"
            keyboardType="numeric"
            maxLength={8}
            width={120}
          />
          <AppFormPicker
            items={category}
            name="category"
            placeholder={"Category"}
            width={"50%"}
            PickerItemComponent={CategoryPickerItem}
            numberOfColumns={3}
          />
          <AppFormField
            name={"description"}
            placeholder="Description"
            numberOfLines={3}
            maxLength={255}
            multiline
          />
          <SubmitButton title={"post"} />
        </AppForm>
      </AppScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  errorText: {
    color: defaultStyles.colors.primary,
  },
});
