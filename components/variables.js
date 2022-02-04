import { Dimensions } from "react-native";

export const variables = {
  DIMENSIONS: Dimensions.get("window"),
  BACKGROUND: { height: Dimensions.get("window").height / 2.5 },
  COLOR: {
    primary: "#29C5F6",
    secondary: "#F65A29",
  },
  SECURE_KEY_PREFIX: "kuruwa-",
  MENU: {
    data: [
      "Recent Requests",
      "Settings",
      "Privacy Policy",
      "About Us",
      "Tell a friend",
      "Help and Feedback",
    ],
    icons: [
      "local-activity",
      "settings",
      "policy",
      "people",
      "emoji-people",
      "feedback",
    ],
  },
};
