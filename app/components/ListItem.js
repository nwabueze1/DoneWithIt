import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors } from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({
  IconComponent,
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  EndIconComponent,
  style,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image source={image} style={styles.avatar} />}
            {/* {icon && <Icon} */}
            <View style={styles.textContainer}>
              {title && (
                <AppText style={styles.title} numberOfLines={1}>
                  {title}
                </AppText>
              )}
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            {EndIconComponent}
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
    alignItems: "center",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  title: {
    fontWeight: "500",
    fontSize: 21,
    color: colors.darkGray,
  },
  textContainer: {
    // marginHorizontal: 5,
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  subTitle: {
    color: colors.mediumGray,
  },
});
