import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ActiveButton from '../components/ActiveButton';
import defaultStyles from "../config/styles"
import SettingsContainer from '../components/SettingsContainer';
import SettingsItem from '../components/SettingsItem';
import ProfileItem from '../components/ProfileItem';

const settings = [
  {
    value: "mirelkorajac@gmail.com"
  },
  {
    value: "060506mK"
  }

]

function ProfileScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text style={styles.title}>Profil</Text>
        <View style={styles.profileContainer}>
            <View style={styles.image}></View>
            <Text style={[defaultStyles.text, styles.text]}>Mirel Korajac</Text>
        </View>
        <SettingsContainer>
          <ProfileItem title="Email" text={settings[0].value} />
          <ProfileItem title="Passwort" text={settings[1].value} />
        </SettingsContainer>
        <ActiveButton style={styles.button} text="Profil bearbeiten" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    fontSize: 21,
    fontWeight: "600"
  },
  image: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 30
  },
  button: {
    marginTop: 45,
  }
});

export default ProfileScreen;