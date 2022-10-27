import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppScreen from "../components/AppScreen";
import { colors } from "../config/colors";
import { defaultStyles } from "../config/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import AppReplyField from "../components/forms/AppReplyField";
import { SubmitButton } from "../components/forms";
import MessageButton from "../components/MessageButton";
import AppText from "../components/AppText";
import { useRoute } from "@react-navigation/native";
import { useApi } from "../hooks/useApi";
import { loadOneListing } from "../api/listings";
import AppLoadingIndicator from "../components/AppLoadingIndicator";
import ListItem from "../components/ListItem";
import { addMessages } from "../api/messages";
import AuthContext from "../context/AuthContext";
import AppErrorMessage from "../components/AppErrorMessage";
import { getUserInfo } from "../api/user";
import { sendNotification } from "../hooks/useRecieveNotification";

const initialValues = {
  message: "",
};
const schema = Yup.object().shape({
  message: Yup.string().required("Please type a message"),
});
export default function MessageDetailsScreen() {
  const [openModal, setOpenModal] = useState(false);
  const route = useRoute();
  const { request: loadListing, data, loading } = useApi(loadOneListing);
  const { error, request: addMessage } = useApi(addMessages);
  const { request: getSenderInfo, data: sender } = useApi(getUserInfo, true);
  const { user } = useContext(AuthContext);

  const handleSendMessage = async (message, props) => {
    // const token = senderInfo[1].pushNotificationToken;
    const newMessage = {
      ...message,
      listingId: data.id,
      from: route.params.to,
      to: route.params.from,
    };
    addMessage(newMessage);
    if (error) return;
    props.resetForm();
    //send push notification to the user
    sendNotification({
      to: sender.pushNotificationToken,
      body: newMessage.message,
      title: "Message from " + user.name,
    });
    setOpenModal(false);
  };

  useEffect(() => {
    loadListing(route.params.listingId);
    getSenderInfo(route.params.from);
  }, []);

  if (loading) return <AppLoadingIndicator visible={loading} />;
  if (error) return <AppErrorMessage onPress={handleSendMessage} />;

  return (
    <AppScreen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem
          style={styles.listItem}
          // image={data.images[0]}
          subTitle={data.price}
          title={data.title}
        />

        <View style={styles.container}>
          <Image
            source={require("../assets/fidelis.jpg")}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <AppText style={styles.subTitle}>{route.params.message}</AppText>
          </View>
        </View>

        {openModal ? (
          <View style={[styles.container, { marginTop: 10 }]}>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleSendMessage}
            >
              {(props) => (
                <View style={styles.form}>
                  <AppReplyField name={"message"} placeholder="Message *" />
                  <SubmitButton
                    onPress={props.handleSubmit}
                    title="send reply"
                  />
                </View>
              )}
            </Formik>
          </View>
        ) : (
          <View>
            <MessageButton
              title="reply"
              onPress={() => setOpenModal(!openModal)}
            />
          </View>
        )}
      </ScrollView>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  title: {
    fontWeight: "500",
    fontSize: 21,
    color: defaultStyles.colors.darkGray,
  },
  textContainer: {
    // marginHorizontal: 5,
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  screen: { backgroundColor: defaultStyles.colors.lightGray },
  subTitle: {
    color: defaultStyles.colors.mediumGray,
    textAlign: "justify",
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: colors.mediumGray,
    borderWidth: 1,
    backgroundColor: colors.lightGray,
    marginTop: 3,
  },
  form: {
    width: "100%",
  },
  listItem: {
    backgroundColor: colors.white,
  },
});
