const {
  default: AsyncStorage,
} = require("@react-native-async-storage/async-storage");
const dayjs = require("dayjs");
import * as Sentry from "sentry-expo";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    Sentry.Native.captureException(error);
  }
};
const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timeStamp);
  return now.diff(storedTime, "minute") > 5;
};
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }
    return item.value;
  } catch (error) {
    Sentry.Native.captureException(error);
  }
};

export default { get, store };
