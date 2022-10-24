import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import ListItem from "../components/ListItem";
import { useRoute } from "@react-navigation/native";

export default function ListingDetailsScreen() {
  const route = useRoute();
  return (
    <View>
      <Image style={styles.image} source={route.params.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{route.params.title}</AppText>
        <AppText style={styles.price}>{route.params.price}</AppText>
        <View style={styles.listItemContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            subTitle="5 listings"
            title={"Mosh Hamedani"}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#666",
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 5,
  },
  listItemContainer: {
    marginVertical: 40,
  },
});
