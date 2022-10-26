import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../config/colors";
import AppText from "./AppText";

export default function AppCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grey,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 10,
  },
});
