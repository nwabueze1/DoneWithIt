class User {
  name = "";
  email = "";
  password = "";
  pushNotificationToken = "";
}

export const createUser = (arg) => {
  const user = new User();
  user.name = arg.name;
  user.email = arg.email;
  user.password = arg.password;
  user.pushNotificationToken = arg.pushNotificationToken;
  return user;
};
