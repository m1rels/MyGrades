import { DefaultTheme } from "@react-navigation/native";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#FFD700",
        text: "#F0F8FF",
        card: "#002366",
        border: "transparent"
    }
}

console.log(DefaultTheme)