import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Screen from "../components/Screen";
import ActiveButton from "../components/ActiveButton";
import SubjectDetails from "../components/SubjectDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import AppFormPicker from "../components/forms/AppFormPicker";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  grade: Yup.string().required().max(1).label("Grade"),
  subject: Yup.object().required().label("Subject"),
  examType: Yup.object().required().label("Exam type"),
  note: Yup.string().label("Note"),
});

function SubjectDetailScreen(props) {
  const [subjects, setSubjects] = useState([
    { id: 1, text: "Mathe", color: "blue", checked: false, grade: 1.3 },
    { id: 2, text: "Deutsch", color: "orange", checked: false, grade: 1.3 },
    { id: 3, text: "Englisch", color: "green", checked: false, grade: 1.3 },
    { id: 4, text: "Französisch", color: "blue", checked: false, grade: 1.3 },
    { id: 5, text: "Latein", color: "orange", checked: false, grade: 1.3 },
    { id: 6, text: "Spanisch", color: "orange", checked: false, grade: 1.3 },
    { id: 7, text: "Physik", color: "orange", checked: false, grade: 1.3 },
    { id: 8, text: "Biologie", color: "green", checked: false, grade: 1.3 },
    { id: 9, text: "Chemie", color: "blue", checked: false, grade: 1.3 },
    { id: 10, text: "Geographie", color: "brown", checked: false, grade: 1.3 },
    { id: 12, text: "Geschichte", color: "orange", checked: false, grade: 1.3 },
    { id: 13, text: "Sport", color: "blue", checked: false, grade: 1.3 },
    { id: 14, text: "Musik", color: "prurple", checked: false, grade: 1.3 },
    { id: 15, text: "Kunst", color: "yellow", checked: false, grade: 1.3 },
    { id: 16, text: "Religion", color: "pink", checked: false, grade: 1.3 },
    { id: 17, text: "Ethik", color: "purple", checked: false, grade: 1.3 },
    // Weitere Elemente hinzufügen...
  ]);

  const [grades, setGrades] = useState([
    { id: 1, text: "Klausur", checked: false },
    { id: 2, text: "Stegreifaufgabe", checked: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="chevron-left" size={20} />
          <Text>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons name="plus" size={40} />
        </TouchableOpacity>
      </View>
      <SubjectDetails />
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.header}>
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
            <View style={styles.button_form}>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#FFD700",
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFD700",
    borderRadius: 25,
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
  },
  formfield_container: {
    marginTop: 20,
  },
  button_form: {
    marginVertical: 50,
  },
  picker_container: {
    marginVertical: 20,
  },
});

export default SubjectDetailScreen;
