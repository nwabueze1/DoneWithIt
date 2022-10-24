import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import { colors } from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";
import { useTokenAuth } from "../hooks/useTokenAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  const navigator = useNavigation();
  const { logout } = useTokenAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={"Okeke Fidelis"}
          subTitle="padrefidelis111@gmail.com"
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
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          onPress={handleLogout}
          title={"Logout"}
          IconComponent={<Icon name={"logout"} backgroundColor="#ffe66d" />}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.lightGray,
  },
});
