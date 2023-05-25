import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({icon, width="100%", fontSize, ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon &&
      <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="#c3cdca"/>}
        <TextInput style={[styles.input, {fontSize}]}
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
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  icon: {
  },
  input: {
    paddingLeft: 15,
    fontWeight: "500",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export default AppTextInput;