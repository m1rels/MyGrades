import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({placeholder, icon}) {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="#c3cdca"/>
        <TextInput style={styles.input}
          placeholder={placeholder}
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
  },
  icon: {
    paddingLeft: 25,
  },
  input: {
    paddingLeft: 15,
    fontSize: 21,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "500",
  }
});

export default AppTextInput;