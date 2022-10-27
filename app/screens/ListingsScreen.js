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
import AppErrorMessage from "../components/AppErrorMessage";

export default function ListingsScreen() {
  const {
    data: listings,
    loading,
    request: loadListings,
    error,
  } = useApi(getListings);
  const navigation = useNavigation();

  useEffect(() => {
    loadListings();
  }, [listings.length]);

  if (error) return <AppErrorMessage onPress={() => loadListings()} />;
  return (
    <AppScreen style={styles.screen}>
      {loading ? (
        <AppLoadingIndicator visible={loading} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          onRefresh={loadListings}
          refreshing={loading}
          data={listings.reverse()}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.listingDetails, item)}
            >
              <AppCard
                title={item.title}
                subTitle={"N" + item.price}
                image={item.images[0]}
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
    paddingBottom: 0,
  },
});
