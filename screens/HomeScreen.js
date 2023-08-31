import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { useState } from "react";
import SubjectItem from "../components/SubjectItem";
import ActiveButton from "../components/ActiveButton";
import AppFormPicker from "../components/forms/AppFormPicker";
import { calculateSubjectAverage, calculateTotalAverage } from "../hooks/calculateAverage";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  grade: Yup.string().required().max(1).label("Grade"),
  subject: Yup.object().required().label("Subject"),
  examType: Yup.object().required().label("Exam type"),
  note: Yup.string().label("Note"),
});

function HomeScreen({ navigation }) {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Mathe", color: "blue", checked: false, grades: [2, 4, 6, 2] },
    { id: 2, name: "Deutsch", color: "orange", checked: false, grades: [2, 4, 6, 2] },
    { id: 3, name: "Englisch", color: "green", checked: false, grades: [2, 4, 6, 2] },
    { id: 4, name: "Französisch", color: "blue", checked: false, grades: [2, 4, 6, 2] },
    { id: 5, name: "Latein", color: "orange", checked: false, grades: [2, 4, 6, 2] },
    { id: 6, name: "Spanisch", color: "orange", checked: false, grades: [2, 4, 6, 2] },
    { id: 7, name: "Physik", color: "orange", checked: false, grades: [2, 4, 6, 2] },
    { id: 8, name: "Biologie", color: "green", checked: false, grades: [2, 4, 6, 2] },
    { id: 9, name: "Chemie", color: "blue", checked: false, grades: [2, 4, 6, 2] },
    { id: 10, name: "Geographie", color: "brown", checked: false, grades: [2, 4, 6, 2] },
    { id: 12, name: "Geschichte", color: "orange", checked: false, grades: [2, 4, 6, 2] },
    { id: 13, name: "Sport", color: "blue", checked: false, grades: [2, 4, 6, 2] },
    { id: 14, name: "Musik", color: "prurple", checked: false, grades: [2, 4, 6, 2] },
    { id: 15, name: "Kunst", color: "yellow", checked: false, grades: [2, 4, 6, 2] },
    { id: 16, name: "Religion", color: "pink", checked: false, grades: [2, 4, 6, 2] },
    { id: 17, name: "Ethik", color: "purple", checked: false, grades: [2, 4, 6, 2] },
    // Weitere Elemente hinzufügen...
  ]);

  const [grades, setGrades] = useState([
    { id: 1, text: "Klausur", checked: false },
    { id: 2, text: "Stegreifaufgabe", checked: false },
  ]);

  const [modalVisible, setModalVisible] = useState("false");

  const TotalAverage = calculateTotalAverage(subjects);

  return (
    <Screen>
      <Text style={styles.title}>Hallo, Mirel!</Text>
      <View style={styles.container}>
        <View style={styles.header}>
        <AppText style={styles.subTitle}>Dein Notenschnitt</AppText>
        <Text style={styles.gradeText}>{TotalAverage}</Text>
        <ActiveButton
          icon="plus"
          size={40}
          text="Note hinzufügen "
          fontSize={18}
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.button_container}
        />
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <View style={styles.buttonModal}>
              <ActiveButton
                icon="close"
                size={40}
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
            <AppForm
              initialValues={{
                grade: "",
                subject: null,
                examType: null,
                note: "",
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <View style={styles.formfield_container}>
                <AppText>Gib deine Note ein.</AppText>
                <AppFormField
                  placeholder="Note"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="school"
                  name="grade"
                  fontSize={18}
                  width={120}
                />
              </View>
              <View style={styles.picker_container}>
                <AppText>Wähle das Fach.</AppText>
                <AppFormPicker
                  subject={true}
                  title="Fach auswählen"
                  name="subject"
                  data={subjects}
                  setData={setSubjects}
                  selectOne={true}
                />
                <AppText>Wähle die Art deiner Note.</AppText>
                <AppFormPicker
                  title="Prüfungsart"
                  name="examType"
                  data={grades}
                  setData={setGrades}
                />
              </View>
              <View>
                <AppFormField
                  placeholder="Notiz"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="note"
                  name="note"
                  placeholderTextColor="#c3cdca"
                  textColor="#FFD700"
                  fontSize={18}
                />
              </View>
              <View style={styles.button}>
                <SubmitButton
                  title="Speichern"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
              </View>
            </AppForm>
          </Screen>
        </Modal>
        <View style={styles.list__container}>
          <AppText style={[styles.subTitle, styles.list__title]}>
            Deine Fächer
          </AppText>
          <FlatList
  style={styles.list}
  data={subjects}
  renderItem={({ item }) => {
    const averageGrade = calculateSubjectAverage(item.grades);
    return (
      <SubjectItem
        title={item.name}
        grade={averageGrade}
        color={item.color}
        bgColor="#002366"
        onPress={() => {
          navigation.navigate("Subject", item);
        }}
      />
    );
  }}
  keyExtractor={(item) => item.id}
  scrollEnabled={true}
/>

        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 70
  },
  button_container: {
    maxWidth: 250,
    marginBottom: 20,
  },
  gradeText: {
    fontSize: 55,
    color: "#FFD700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "700",
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  subTitle: {
    fontWeight: "700",
  },
  icon: {
    backgroundColor: "#FFD700",
    borderRadius: 25,
    position: "relative",
    top: 50,
    left: 120,
  },
  list__container: {
    backgroundColor: "#002395",
    borderRadius: 25,
    maxHeight: 450,
    padding: 10,
  },
  list: {
    padding: 10,
  },
  list__title: {
    paddingBottom: 10,
  },
  buttonModal: {
    display: "flex",
    alignItems: "flex-end",
  },
  formfield_container: {
    marginTop: 20,
  },
  picker_container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  button: {
    marginVertical: 50,
  },
  header: {
    alignItems:"center"
  }
});

export default HomeScreen;
