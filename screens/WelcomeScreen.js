import React from 'react';
import { Image, Platform } from "react-native";
import { View, StyleSheet, Text } from 'react-native';
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Welcome to MyGrades</Text>
            <Image source={require("../assets/infinity.png")} />
            <Text style={[styles.text, defaultStyles.text]}>The limits are endless.</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton buttonText="Login" />
            <AppButton buttonText="Register" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 70
  },
  welcomeContainer: {
    position: "absolute",
    top: 70
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "600",
  },
  button: {
    marginBottom: 20
  }
});

export default WelcomeScreen;