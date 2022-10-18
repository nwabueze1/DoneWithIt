import { StyleSheet, FlatList, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import AppScreen from "../components/AppScreen";
import { colors } from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messageId) => {
    setMessages(messages.filter((c) => c.id !== messageId));
  };
  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {}}
            image={item.image}
            title={item.title}
            subTitle={item.description}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          //call the server to fetch new data
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
