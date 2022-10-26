import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import { colors } from "../config/colors";
import { screens } from "../routes/Screens";
import { useNavigation } from "@react-navigation/native";
import AppLoadingIndicator from "../components/AppLoadingIndicator";
import { useApi } from "../hooks/useApi";
import { getListings } from "../api/listings";

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
  {
    id: 3,
    title: "Couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 4,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
];
export default function ListingsScreen() {
  const { loading, request: loadListings } = useApi(getListings);
  const navigation = useNavigation();

  useEffect(() => {
    loadListings();
  }, []);
  return (
    <AppScreen style={styles.screen}>
      {loading ? (
        <AppLoadingIndicator visible={loading} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.listingDetails, item)}
            >
              <AppCard
                title={item.title}
                subTitle={"N" + item.price}
                image={item.image}
              />
            </TouchableOpacity>
          )}
          // ItemSeparatorComponent={ListItemSeparator}
        />
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
