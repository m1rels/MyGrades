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
import ExamTypeModal from "../components/ExamTypeModal";

export default function ExamWeightScreen() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [showSettingsContainer, setShowSettingsContainer] = useState(false);
  const [selectedItems, setSelectedItems] = useState({
    "Mündliche Note": { title: "Mündliche Note", weightNumber: "1" },
    "Referat": { title: "Referat", weightNumber: "1" },
    "Kleiner Leistungsnachweis": { title: "Kleiner Leistungsnachweis", weightNumber: "1" },
    "Klausur": { title: "Klausur", weightNumber: "1" },
    "Stegreifaufgabe": { title: "Stegreifaufgabe", weightNumber: "1" },
    "Kleiner angekündigter Leistungsnachweis": { title: "Kleiner angekündigter Leistungsnachweis", weightNumber: "1" },
    "Abfrage": { title: "Abfrage", weightNumber: "1" },
    // ... Weitere Items
  });

  const handleSubmit = (values) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemTitle]: {
        title: values.examType,
        weightNumber: values.weight,
      },
    }));
    setModalVisible(false);
  };

  return (
    <Screen>
      <Text style={styles.title}>Bewertungssystem</Text>
      <View>
        <View style={styles.selector}>
          <AppText style={styles.subTitle}>Prüfungsarten</AppText>
          <ActiveButton icon="plus" size={40} />
        </View>
        <SettingsContainer>
        <WeightItem title={selectedItem ? selectedItem.title : "Kleiner Leistungsnachweis"} weightNumber={selectedItem ? selectedItem.weightNumber : "1"} percentage="50.00%" onPress={() => {
          setModalVisible(true);
          setShowSettingsContainer(true);
          setSelectedItem({
            title: "Kleiner Leistungsnachweis",
            weightNumber: "1",
          });
        }} />
       <ExamTypeModal visible={modalVisible} onPress={() => setModalVisible(false)} showSettingsContainer={showSettingsContainer} selectedItem={selectedItem} handleSubmit={handleSubmit} />
          <SettingsItem
            title={selectedItem ? selectedItem.title : "Mündliche Note"}
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
            onPress={() => {
              setModalVisible(true);
              setShowSettingsContainer(false);
              setSelectedItem({
                title: "Mündliche Note",
                weightNumber: "1",
              });
            }}
          />
          <SettingsItem
            title={selectedItem ? selectedItem.title : "Abfrage"}
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false);
              setSelectedItem({
                title: "Abfrage",
                weightNumber: "1",
              });
            }}
          />
          <SettingsItem
            title={selectedItem ? selectedItem.title : "Stegreifaufgabe"}
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false)
              setSelectedItem({
                title: "Stegreifaufgabe",
                weightNumber: "1",
              });
            }}
          />
          <SettingsItem
            title={selectedItem ? selectedItem.title : "Kleiner angekündigter Leistungsnachweis"}
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false)
            }}
          />
          <SettingsItem
            title={selectedItem ? selectedItem.title : "Referat"}
            fontSize={16}
            weight={true}
            weightNumber="1"
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false)
              setSelectedItem({
                title: "Referat",
                weightNumber: "1",
              });
            }}
          />
        </SettingsContainer>
        <SettingsContainer>
          <WeightItem title={selectedItem ? selectedItem.title : "Klausur"} weightNumber="1" percentage="50.00%" onPress={() => {
            setModalVisible(true);
            setShowSettingsContainer(true);
            setSelectedItem({
              title: "Klausur",
              weightNumber: "1",
            });
          }} />
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
