import { View, FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import { colors } from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import AuthContext from "../context/AuthContext";
import { screens } from "../routes/Screens";
import { useNavigation } from "@react-navigation/native";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    link: screens.myListings,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    link: screens.mMessage,
  },
];

export default function AccountScreen() {
  const { user, logOut } = useContext(AuthContext);
  const navigator = useNavigation();

  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/fidelis.jpg")}
          title={user?.name}
          subTitle={user?.email}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigator.navigate(item.link)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          onPress={logOut}
          title={"Logout"}
          IconComponent={<Icon name={"logout"} backgroundColor="#ffe66d" />}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.lightGray,
  },
});
