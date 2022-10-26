import AnimatedLottieView from "lottie-react-native";
import React, { useRef } from "react";

export default function AppLoadingIndicator({ visible }) {
  const animation = useRef(null);

  return visible ? (
    <AnimatedLottieView
      autoPlay
      ref={animation}
      source={require("../animations/loading.json")}
    />
  ) : null;
}
