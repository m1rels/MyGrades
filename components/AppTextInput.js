import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon &&
      <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="#c3cdca"/>}
        <TextInput style={styles.input}
          {...otherProps}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    backgroundColor: "#F0F8FF",
    width: "100%",
    height: 60,
    borderRadius: 25,
    marginVertical: 10,
  },
  icon: {
    paddingLeft: 25,
  },
  input: {
    paddingLeft: 15,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export default AppTextInput;