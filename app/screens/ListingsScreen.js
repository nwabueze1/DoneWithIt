import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import ListItemSeparator from "../components/ListItemSeparator";
import { colors } from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
];
export default function ListingsScreen() {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"N" + item.price}
            image={item.image}
          />
        )}
        // ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
