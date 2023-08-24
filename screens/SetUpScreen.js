import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField } from "../components/forms";
import AppCheckBox from "../components/AppCheckBox";
import SubjectFormPicker from "../components/forms/SubjectFormPicker";
import SubjectPicker from "../components/SubjectPicker";
import AppFormPicker from "../components/forms/AppFormPicker";
import Button from "../components/AppButton";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  class: Yup.number().required().min(1).max(10000).label("Class"),
  gradeSystem: Yup.object().required().nullable().label("Grade System"),
  subjects: Yup.object().required().nullable().label("Subjects"),
});

function SetUpScreen(props) {
  const [grades, setGrades] = useState([
    { id: 1, text: "Noten 1 bis 6", checked: false },
    { id: 2, text: "Punkte 0 bis 15", checked: false },
    // Weitere Elemente hinzufügen...
  ]);

  const [subjects, setSubjects] = useState([
    { id: 1, text: "Mathe", color: "blue", checked: false },
    { id: 2, text: "Deutsch", color: "orange", checked: false },
    { id: 3, text: "Englisch", color: "green", checked: false },
    { id: 4, text: "Französisch", color: "blue", checked: false },
    { id: 5, text: "Latein", color: "orange", checked: false },
    { id: 6, text: "Spanisch", color: "orange", checked: false },
    { id: 7, text: "Physik", color: "orange", checked: false },
    { id: 8, text: "Biologie", color: "green", checked: false },
    { id: 9, text: "Chemie", color: "blue", checked: false },
    { id: 10, text: "Geographie", color: "brown", checked: false },
    { id: 12, text: "Geschichte", color: "orange", checked: false },
    { id: 13, text: "Sport", color: "blue", checked: false },
    { id: 14, text: "Musik", color: "prurple", checked: false },
    { id: 15, text: "Kunst", color: "yellow", checked: false },
    { id: 16, text: "Religion", color: "pink", checked: false },
    { id: 17, text: "Ethik", color: "purple", checked: false },
    // Weitere Elemente hinzufügen...
  ]);

  const selectedItems = subjects.filter((item) => item.checked);

  return (
    <Screen>
      <Text style={styles.title}>Erstelle</Text>
      <Text style={styles.title}>dein Profil</Text>
      <View style={styles.form}>
        <AppForm
          initialValues={{ class: "", gradeSystem: null, subjects: null }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            placeholder="Klasse"
            keyBoardType="numeric"
            name="class"
            width={125}
            autoCorrect={false}
          />
          <AppFormPicker
            title="Notensystem"
            name="gradeSystem"
            data={grades}
            setData={setGrades}
          />
          <SubjectFormPicker
            title="Fächer"
            name="subjects"
            data={subjects}
            setData={setSubjects}
            selectedItems={selectedItems}
          />
        </AppForm>
      </View>
      <View style={styles.button}>
        <Button buttonText="Weiter" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    color: "#FFD700",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    marginVertical: 70,
  },
  form: {
    marginTop: 50,
  },
});

export default SetUpScreen;
