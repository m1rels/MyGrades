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

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  grade: Yup.string().required().max(1).label("Grade"),
  subject: Yup.object().required().label("Subject"),
  examType: Yup.object().required().label("Exam type"),
  note: Yup.string().label("Note"),
});

function HomeScreen(props) {
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

  const [modalVisible, setModalVisible] = useState("false");

  return (
    <Screen>
      <Text style={styles.title}>Hallo, Mirel!</Text>
      <View style={styles.container}>
        <AppText style={styles.subTitle}>Dein Notenschnitt</AppText>
        <Text style={styles.gradeText}>Ø 2,33</Text>
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
          <ActiveButton />
          <FlatList
            style={styles.list}
            data={subjects}
            renderItem={({ item }) => (
              <SubjectItem
                title={item.text}
                grade={item.grade}
                color={item.color}
                onPress={() => {
                  handleCheckboxChange(item.id);
                }}
                value={item.checked}
                onValueChange={() => handleCheckboxChange(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled="true"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginVertical: 50,
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
  header: {
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
});

export default HomeScreen;
