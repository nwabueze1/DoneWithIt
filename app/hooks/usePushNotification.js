import { useEffect, useState } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";

export function usePushNotification() {
  const [token, setToken] = useState("");

  const registerForNotification = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert(
          "Notification failed",
          "You need to enable notification to receive notification from this app. ",
          [
            {
              text: "Close",
            },
          ]
        );
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      setToken(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };

  useEffect(() => {
    registerForNotification();
  }, []);

  return token;
}
