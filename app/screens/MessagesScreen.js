import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import AppScreen from "../components/AppScreen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Icon from "../components/Icon";
import { defaultStyles } from "../config/styles";
const initialMessage = [
  {
    id: 1,
    title:
      "We can do better with an abstraction! With Formik, you can and should build reusable input primitive components that you can share around your application",
    description:
      "We can do better with an abstraction! With Formik, you can and should build reusable input primitive components that you can share around your application",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title:
      "We can do better with an abstraction! With Formik, you can and should build reusable input primitive components that you can share around your application",
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
            EndIconComponent={
              <Icon
                name={"chevron-right"}
                backgroundColor={defaultStyles.colors.lightGray}
                iconColor={defaultStyles.colors.mediumGray}
                size={30}
              />
            }
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
