import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors } from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
          <View style={styles.container}>
            <Image source={image} style={styles.avatar} />
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  avatar: {
    height: 70,
    width: 70,
    backgroundColor: "dodgerblue",
    borderRadius: 70,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  textContainer: {
    // marginHorizontal: 5,
  },
  subTitle: {
    color: colors.mediumGray,
  },
});
