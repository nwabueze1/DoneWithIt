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
  value,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={defaultStyles.colors.mediumGray}
            />
          )}
          <AppText style={styles.text}>
            {value ? value.label : placeholder}
          </AppText>

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
          key={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
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
    width: "100%",
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
});
