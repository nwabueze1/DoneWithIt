import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useState } from "react";

export function useNetworkInfo() {
  const [isConnected, setIsConnected] = useState(true);
  const [isInternetReachable, setIsInternetReachable] = useState(null);

  let unsubscribe;

  useEffect(() => {
    unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      setIsInternetReachable(state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return {
    isConnected,
    unsubscribe,
    isInternetReachable,
  };
}
