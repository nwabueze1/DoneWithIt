import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import AppImageInput from "./AppImageInput";

export default function AppImageListInput({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        automaticallyAdjustContentInsets
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map((uri, index) => (
          <AppImageInput
            imageUri={uri}
            key={index}
            onChangeImage={() => onRemoveImage(uri)}
          />
        ))}
        <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
}
