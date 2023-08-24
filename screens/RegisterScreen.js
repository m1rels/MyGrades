import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Screen from "../components/Screen";

import * as Yup from "yup";

import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().label("Name"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Image source={require("../assets/infinity.png")} style={styles.image} />
      <AppText>
        Registriere dich, indem du deinen Namen, Email sowie ein Passwort
        angibst.
      </AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            textContentType="emailAddress"
            keyBoardType="email-address"
          />
          <AppFormField
            placeholder="Passwort"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            textContentType="password"
          />
        </View>
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  image: {
    height: 112,
    width: 112,
  },
  inputContainer: {
    marginVertical: 50,
  },
});

export default RegisterScreen;
