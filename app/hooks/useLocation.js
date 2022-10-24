import { useState, useEffect } from "react";
import { Alert } from "react-native";

import * as Location from "expo-location";

export function useLocation() {
  const [state, setState] = useState({});

  useEffect(() => {
    try {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return Alert.alert(
            "Permission Denied",
            "You need to enable location",
            [
              {
                text: "close",
              },
            ]
          );
        }

        let {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();

        setState({ latitude, longitude });
      })();
    } catch (error) {}
  }, []);

  return { location: state };
}
