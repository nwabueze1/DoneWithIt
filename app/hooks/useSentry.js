import * as Sentry from "sentry-expo";

export const useSentry = () => {
  const initializeSentry = () =>
    Sentry.init({
      dsn: "you dsn here",
      enableInExpoDevelopment: true,
      debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
    });

  return {
    initializeSentry,
    captureError: Sentry.Native.captureException,
  };
};
