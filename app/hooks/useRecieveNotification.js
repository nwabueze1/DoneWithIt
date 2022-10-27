import { create } from "apisauce";

const apiUrl = create({ baseURL: "https://exp.host/--/api/v2/push/send" });

export const sendNotification = (data) => apiUrl.post("/", data);
