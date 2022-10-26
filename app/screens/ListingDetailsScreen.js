import { View, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import ListItem from "../components/ListItem";
import { useRoute } from "@react-navigation/native";
import { useApi } from "../hooks/useApi";
import { loadOneListing } from "../api/listings";
import AppLoadingIndicator from "../components/AppLoadingIndicator";

export default function ListingDetailsScreen() {
  const { data: listing, request, loading } = useApi(loadOneListing);
  const route = useRoute();

  useEffect(() => {
    request(route.params._id);
  }, []);
  return loading ? (
    <AppLoadingIndicator visible={loading} />
  ) : (
    <View>
      {listing?.images && (
        <Image style={styles.image} source={{ uri: listing?.images[1] }} />
      )}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing?.title}</AppText>
        <AppText style={styles.price}>NGN {listing?.price}</AppText>
        <View style={styles.listItemContainer}>
          <ListItem
            image={require("../assets/fidelis.jpg")}
            subTitle={listing?.user?.numberOfListings + " listings"}
            title={listing?.user?.name}
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
