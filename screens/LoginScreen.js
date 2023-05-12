import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";

import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from "../components/AppButton";
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object(). shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image source={require("../assets/infinity.png")} style={styles.image} />
        <AppText>Logge dich mit deiner Email und deinem Passwort ein.</AppText>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
            <View style={styles.inputContainer}>
                  <AppFormField 
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    textContentType="emailAddress"
                    keyBoardType="email-address" />
                  <AppFormField 
                    placeholder="Passwort"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    secureTextEntry
                    textContentType="password"/>
                  </View>
                <SubmitButton title="Login" />
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
    width: 112
  },
  inputContainer: {
    marginVertical: 50,
  }
});

export default LoginScreen;