import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({icon, width="100%", fontSize, color, textColor, ...otherProps}) {
  return (
    <View style={[styles.container, {width}, {backgroundColor: color}]}>
      {icon &&
      <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="#c3cdca"/>}
        <TextInput style={[styles.input, {fontSize}, {color: textColor}]}
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
    padding: 15,
    borderRadius: 25,
    marginTop: 30,
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