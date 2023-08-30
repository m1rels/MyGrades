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
  const [selectedModalItem, setSelectedModalItem] = useState(null);
  const [newExamType, setNewExamType] = useState(false);

  const handleSubmit = (values, selectedModalItem) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [selectedModalItem]: {
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
          <ActiveButton icon="plus" size={40} onPress={() => {
            setModalVisible(true);
            setNewExamType(true);
            setShowSettingsContainer(true);
            setSelectedModalItem(null);
          }}  />
        </View>
        <SettingsContainer>
        <WeightItem title={selectedItems["Kleiner Leistungsnachweis"].title} weightNumber={selectedItems["Kleiner Leistungsnachweis"].weightNumber} percentage="50.00%" onPress={() => {
          setModalVisible(true);
          setShowSettingsContainer(true);
          setSelectedModalItem("Kleiner Leistungsnachweis");
          setNewExamType(false);
        }} />
       <ExamTypeModal visible={modalVisible} onPress={() => setModalVisible(false)} showSettingsContainer={showSettingsContainer} selectedItem={selectedItems[selectedModalItem]} handleSubmit={(values) => handleSubmit(values, selectedModalItem)} newExamType={newExamType} />
       <SettingsItem
            title={selectedItems["Mündliche Note"].title}
            fontSize={16}
            weight={true}
            weightNumber={selectedItems["Mündliche Note"].weightNumber}
            fontWeight={400}
            onPress={() => {
              setModalVisible(true);
              setShowSettingsContainer(false);
              setSelectedModalItem("Mündliche Note");
              setNewExamType(false);
            }}
          />
          <SettingsItem
            title={selectedItems["Abfrage"].title}
            fontSize={16}
            weight={true}
            weightNumber={selectedItems["Abfrage"].weightNumber}
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false);
              setSelectedModalItem("Abfrage");
              setNewExamType(false);
            }}
          />
          <SettingsItem
            title={selectedItems["Stegreifaufgabe"].title}
            fontSize={16}
            weight={true}
            weightNumber={selectedItems["Stegreifaufgabe"].weightNumber}
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false)
              setSelectedModalItem("Stegreifaufgabe");
              setNewExamType(false);
            }}
          />
          <SettingsItem
            title={selectedItems["Kleiner angekündigter Leistungsnachweis"].title}
            fontSize={16}
            weight={true}
            weightNumber={selectedItems["Kleiner angekündigter Leistungsnachweis"].weightNumber}
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false)
              setSelectedModalItem("Kleiner angekündigter Leistungsnachweis");
              setNewExamType(false);
            }}
          />
          <SettingsItem
            title={selectedItems["Referat"].title}
            fontSize={16}
            weight={true}
            weightNumber={selectedItems["Referat"].weightNumber}
            fontWeight={400}
            onPress={() => {
              setModalVisible(true)
              setShowSettingsContainer(false)
              setSelectedModalItem("Referat");
              setNewExamType(false);
            }}
          />
        </SettingsContainer>
        <SettingsContainer>
          <WeightItem title={selectedItems["Klausur"].title} weightNumber={selectedItems["Klausur"].weightNumber} percentage="50.00%" onPress={() => {
            setModalVisible(true);
            setShowSettingsContainer(true);
            setSelectedModalItem("Klausur");
            setNewExamType(true);
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
