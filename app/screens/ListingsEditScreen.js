import { Image, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
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

const schema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required().min(1).max(10000),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
export default function ListingsEditScreen() {
  const { location } = useLocation();
  const { get } = useApi();

  const loadCategories = async () => {
    try {
      const { data, problem } = await get("/categories");
      if (problem) return console.log(problem);
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <AppScreen style={styles.container}>
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <AppForm
        initialValues={{
          title: "",
          description: "",
          category: "",
          price: "",
          images: [],
        }}
        validationSchema={schema}
        onSubmit={(values) => {}}
      >
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
          items={categories}
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
});
