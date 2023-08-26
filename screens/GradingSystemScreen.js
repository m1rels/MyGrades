import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import CheckBoxModal from "../components/CheckBoxModal";
import Screen from "../components/Screen";
import ActiveButton from "../components/ActiveButton";
import SettingsContainer from "../components/SettingsContainer";
import SettingsItem from "../components/SettingsItem";
import Collapsible from 'react-native-collapsible';
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

export default function GradingSystemScreen() {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [gradeSystems, setGradeSystems] = useState([
        { id: 1, text: "Noten 1 bis 6", checked: false },
        { id: 2, text: "Punkte 0 bis 15", checked: false },
        // Weitere Elemente hinzufügen...
      ]);

    const [grade, setGrades] = useState("Note 1 bis 6")


    return (
        <Screen>
            <Text style={styles.title}>Bewertungssystem</Text>
            <View style={styles.selector}>
                <View>
                <Text style={[defaultStyles.text]}>Aktuelles Notensystem</Text>
                <AppText style={styles.grade}>{grade.text}</AppText>
                </View>
                <View>
                <ActiveButton icon="pencil" style={styles.button} size={20} onPress={() => setIsModalVisible(true)} />
                </View>
            </View>
           <CheckBoxModal 
           visible={isModalVisible}
           onPress={() => setIsModalVisible(false)}
           title="Notensystem"
           data={gradeSystems}
           setData={setGradeSystems}
           onSelectItem={(grade) => setGrades(grade)}
           closeModal={() => setIsModalVisible(false)}
           />
           <View style={styles.container}>
            <SettingsContainer>
                <SettingsItem title="Prüfungsgewichtung" />
                <SettingsItem title="Fächergewichtung" />
            </SettingsContainer>
            <SettingsContainer>
                <SettingsItem 
                title="Durchschnittsberechnung"
                onPress={() => 
                    setIsCollapsed(!isCollapsed)
                } 
                collapsibleActive={isCollapsed}
                    />
                <Collapsible collapsed={isCollapsed}>
                <View>
                    <View>
                    <Text style={[defaultStyles.text, styles.subTitle]}>Durchschnitt pro Fach:</Text>
                    <Text style={[defaultStyles.text, styles]}>Hier befindet sich die Beschreibung, wie der Durchschnitt pro Fach berechnet wird.</Text>
                    </View>
                    <View>
                    <Text style={[defaultStyles.text, styles.subTitle]}>Gesamtdurchschnitt:</Text>
                    <Text style={[defaultStyles.text]}>Hier befindet sich die Beschreibung, wie der Gesamtdurchschnitt berechnet wird.</Text>
                    </View>
                </View>
            </Collapsible>
            </SettingsContainer>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    selector: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    container: {
        marginVertical: 30
    },
    title: {
        fontSize: 36,
        color: "#FFD700",
        fontWeight: "700",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      },
      grade: {
        fontWeight: 700
      },
      subTitle: {
        marginVertical:10,
        fontWeight: 700
      }
});
