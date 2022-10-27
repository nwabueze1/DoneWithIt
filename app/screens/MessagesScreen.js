import { StyleSheet, FlatList, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ListItem from "../components/ListItem";
import AppScreen from "../components/AppScreen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Icon from "../components/Icon";
import { defaultStyles } from "../config/styles";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../routes/Screens";
import { useApi } from "../hooks/useApi";
import { getMessages } from "../api/messages";
import AppLoadingIndicator from "../components/AppLoadingIndicator";
import AuthContext from "../context/AuthContext";
import AppErrorMessage from "../components/AppErrorMessage";

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
  const { user } = useContext(AuthContext);
  const {
    data: messages,
    error,
    loading,
    request: loadMessages,
  } = useApi(getMessages);
  const navigator = useNavigation();

  const handleDelete = (messageId) => {};

  useEffect(() => {
    loadMessages(user.id);
  }, []);

  if (loading) return <AppLoadingIndicator visible={loading} />;
  if (error) return <AppErrorMessage onPress={() => loadMessages(user.id)} />;

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(c) => c._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigator.navigate(screens.messageDetail, item)}
            image={require("../assets/fidelis.jpg")}
            title={item.message}
            // subTitle={item.description}
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
        refreshing={loading}
        onRefresh={loadMessages}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
