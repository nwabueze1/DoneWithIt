import * as Sentry from "sentry-expo";

export const useSentry = () => {
  const initializeSentry = () =>
    Sentry.init({
      dsn: "https://1190c8b838044d84bdffc0d95a80feb7@o449109.ingest.sentry.io/4504056902057984",
      enableInExpoDevelopment: true,
      debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
    });

  return {
    initializeSentry,
    captureError: Sentry.Native.captureException,
  };
};
