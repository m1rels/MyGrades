import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import defaultStyles from "../config/styles";

function SubjectItem({borderColor, title, grade}) {
  return (
    <TouchableOpacity style={[styles.container, {borderColor: borderColor}]}>
        <Text style={[defaultStyles.text, styles.text]}>{title}</Text>
        <Text style={[defaultStyles.text, styles.text]}>{grade}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#002395",
    width: "100%",
    height: 70,
    borderRadius: 25,
    borderWidth: 5,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "900",
  }
});

export default SubjectItem;