import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { defaultStyles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function AppImageInput({ onChangeImage, imageUri }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  const handleSelectImage = () => {
    if (!imageUri) return pickImage();
    Alert.alert("Delete", "Are you sure you want to delete this Image ? ", [
      {
        text: "Yes",
        onPress: () => onChangeImage(null),
      },
      {
        text: "No",
      },
    ]);
  };
  return (
    <TouchableWithoutFeedback onPress={handleSelectImage}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera" size={50} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: defaultStyles.colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 15,
  },
});
