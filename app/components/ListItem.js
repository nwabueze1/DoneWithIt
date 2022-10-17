import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors } from "../config/colors";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatar: {
    height: 70,
    width: 70,
    backgroundColor: "dodgerblue",
    borderRadius: 70,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  textContainer: {
    // marginHorizontal: 5,
  },
  subTitle: {
    color: colors.mediumGray,
  },
});
