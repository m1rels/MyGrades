import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "#F0F8FF"
  }
});

export default AppText;
