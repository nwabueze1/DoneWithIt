import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import AppScreen from "../components/AppScreen";
import { colors } from "../config/colors";
import { defaultStyles } from "../config/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import AppReplyField from "../components/forms/AppReplyField";
import { SubmitButton } from "../components/forms";
import MessageButton from "../components/MessageButton";
import AppText from "../components/AppText";

const initialValues = {
  message: "",
};
const schema = Yup.object().shape({
  message: Yup.string().required("Please type a message"),
});
export default function MessageDetailsScreen() {
  const [openModal, setOpenModal] = useState(false);
  const details = {
    title: "Is this item still for sale",
    image: require("../assets/fidelis.jpg"),
    message:
      "Is this item still available, I just wanted to check if you still have it in stock, I would love to buy,Is this item still available, I just wanted to check if you still have it in stock, I would love to buy,Is this item still available, I just wanted to check if you still have it in stock, I would love to buy",
  };
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <Image source={details.image} style={styles.avatar} />
        <View style={styles.textContainer}>
          <AppText style={styles.subTitle}>{details.message}</AppText>
        </View>
      </View>
      {!openModal && (
        <View>
          {/* show the product here */}
          <MessageButton
            title="reply"
            onPress={() => setOpenModal(!openModal)}
          />
        </View>
      )}
      {openModal && (
        <View style={[styles.container, { marginTop: 10 }]}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, props) => {
              //call the api and send a message
            }}
          >
            {(props) => (
              <View style={styles.form}>
                <AppReplyField name={"message"} placeholder="Message *" />
                <SubmitButton onPress={props.handleSubmit} title="send reply" />
              </View>
            )}
          </Formik>
        </View>
      )}
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
});
