import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import defaultStyles from "../config/styles";

function ActiveButton({text}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={ styles.text }>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "#FFD700",
    borderRadius: 25,
  },
  text: {
    fontSize: 21,
    color: "#002366",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export default ActiveButton;