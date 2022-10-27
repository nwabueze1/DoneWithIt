import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getListingByUser } from "../api/listings";
import AppLoadingIndicator from "../components/AppLoadingIndicator";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import { defaultStyles } from "../config/styles";
import AuthContext from "../context/AuthContext";
import { useApi } from "../hooks/useApi";

export default function MyListingScreen() {
  const { user } = useContext(AuthContext);
  const { data, loading, error, request } = useApi(getListingByUser);
  useEffect(() => {
    request(user.id);
  }, []);

  if (loading) return <AppLoadingIndicator visible={loading} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(c) => c._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={"NGN " + item.price}
            style={styles.listContainer}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: defaultStyles.colors.lightGray,
  },
  listContainer: {
    backgroundColor: defaultStyles.colors.white,
  },
});
