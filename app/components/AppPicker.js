import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultStyles } from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items = [],
  onValueChange,
  placeholder,
  numberOfColumns = 1,
  value,
  width = "100%",
  PickerItemComponent = PickerItem,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={defaultStyles.colors.mediumGray}
            />
          )}
          {value ? (
            <AppText style={styles.text}>{value.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            style={styles.icon}
            name={"chevron-down"}
            size={25}
            color={defaultStyles.colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Button title="close" onPress={() => setVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                onValueChange(item);
                setVisible(false);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    flexDirection: "row",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    ...defaultStyles.text,
  },
  placeholder: {
    color: defaultStyles.colors.mediumGray,
    flex: 1,
  },
});
