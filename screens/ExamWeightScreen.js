import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import SettingsContainer from "../components/SettingsContainer";
import SettingsItem from "../components/SettingsItem";
import ActiveButton from "../components/ActiveButton";
import Collapsible from "react-native-collapsible";
import defaultStyles from "../config/styles";
import WeightItem from "../components/WeightItem";

export default function ExamWeightScreen() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Screen>
      <Text style={styles.title}>Bewertungssystem</Text>
      <View>
        <View style={styles.selector}>
          <AppText style={styles.subTitle}>Prüfungsarten</AppText>
          <ActiveButton icon="plus" size={40} />
        </View>
        <SettingsContainer>
        <WeightItem title="Kleiner Leistungsnachweis" weightNumber="1" percentage="50.00%" />
          <SettingsItem
            title="Mündliche Note"
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
          />
          <SettingsItem
            title="Abfrage"
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
          />
          <SettingsItem
            title="Steigreifaufgabe"
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
          />
          <SettingsItem
            title="Kleiner angekündigter Leistungsnachweis"
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
          />
          <SettingsItem
            title="Referat"
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
          />
        </SettingsContainer>
        <SettingsContainer>
          <WeightItem title="Kleiner Leistungsnachweis" weightNumber="1" percentage="50.00%" />
        </SettingsContainer>
      </View>
      <SettingsContainer>
        <SettingsItem
          title="Durchschnittsberechnung"
          onPress={() => setIsCollapsed(!isCollapsed)}
          collapsibleActive={isCollapsed}
        />
        <Collapsible collapsed={isCollapsed}>
          <View>
            <View>
              <Text style={[defaultStyles.text, styles.subTitle]}>
                Durchschnitt pro Fach:
              </Text>
              <Text style={[defaultStyles.text, styles]}>
                Hier befindet sich die Beschreibung, wie der Durchschnitt pro
                Fach berechnet wird.
              </Text>
            </View>
            <View>
              <Text style={[defaultStyles.text, styles.subTitle]}>
                Gesamtdurchschnitt:
              </Text>
              <Text style={[defaultStyles.text]}>
                Hier befindet sich die Beschreibung, wie der Gesamtdurchschnitt
                berechnet wird.
              </Text>
            </View>
          </View>
        </Collapsible>
      </SettingsContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  selector: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  container: {
    marginVertical: 30,
  },
  title: {
    fontSize: 36,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  grade: {
    fontWeight: 700,
  },
  subTitle: {
    marginVertical: 10,
    fontWeight: 700,
  },
});
