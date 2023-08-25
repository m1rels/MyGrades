import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Screen from "../components/Screen";
import SettingsContainer from "../components/SettingsContainer";
import SettingsItem from "../components/SettingsItem";
import defaultStyles from "../config/styles";

function SettingsScreen(props) {
  return (
    <Screen>
      <Text style={styles.title}>Einstellungen</Text>
      <SettingsContainer heading="Mirel Korajac">
        <SettingsItem title="Profil" />
      </SettingsContainer>
      <SettingsContainer heading="10. Klasse">
        <SettingsItem title="Schuljahr ändern" />
        <SettingsItem title="Bewertungssystem" />
        <SettingsItem title="Deine Fächer" />
      </SettingsContainer>
      <Text style={[defaultStyles.text, styles.subTitle]}>Links</Text>
      <SettingsContainer>
        <SettingsItem title="Hilfe" />
        <SettingsItem title="Support kontaktieren" />
        <SettingsItem title="Weiterempfehlen" />
        <SettingsItem title="Bewerte uns" />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem title="Nutzungsbedingungen" />
        <SettingsItem title="Datenschutzbestimmungen" />
      </SettingsContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 36,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  subTitle: {
    fontWeight: "700",
    fontSize: 21,
    marginTop: 10,
  },
});

export default SettingsScreen;
