import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import SubjectItem from "../components/SubjectItem";
import ActiveButton from "../components/ActiveButton";
import SubjectCheckBox from "../components/SubjectCheckBox";

const allPossibleSubjects = [
  { id: 1, name: "Mathe", color: "blue", checked: false, grade: 1.3 },
  { id: 2, name: "Deutsch", color: "orange", checked: false, grade: 1.3 },
  { id: 3, name: "Englisch", color: "green", checked: false, grade: 1.3 },
  { id: 4, name: "Französisch", color: "blue", checked: false, grade: 1.3 },
  { id: 5, name: "Latein", color: "orange", checked: false, grade: 1.3 },
  { id: 6, name: "Spanisch", color: "orange", checked: false, grade: 1.3 },
  { id: 7, name: "Physik", color: "orange", checked: false, grade: 1.3 },
  { id: 8, name: "Biologie", color: "green", checked: false, grade: 1.3 },
  { id: 9, name: "Chemie", color: "blue", checked: false, grade: 1.3 },
  { id: 10, name: "Geographie", color: "brown", checked: false, grade: 1.3 },
  { id: 12, name: "Geschichte", color: "orange", checked: false, grade: 1.3 },
  { id: 13, name: "Sport", color: "blue", checked: false, grade: 1.3 },
  { id: 14, name: "Musik", color: "prurple", checked: false, grade: 1.3 },
  { id: 15, name: "Kunst", color: "yellow", checked: false, grade: 1.3 },
  { id: 16, name: "Religion", color: "pink", checked: false, grade: 1.3 },
  { id: 17, name: "Ethik", color: "purple", checked: false, grade: 1.3 },
  // Liste aller möglichen Fächer
];

const initialSubjects = [
  {
    name: "Mathe",
    grade: "~2,1",
    color: "#0000FF",
    checked: true,
  },
  {
    name: "Deutsch",
    grade: "~2,1",
    color: "#FF0000",
    checked: true,
  },
  {
    name: "Englisch",
    grade: "~2,1",
    color: "#008000",
    checked: true,
  },
  {
    name: "Physik",
    grade: "~2,1",
    color: "#FFA500",
    checked: true,
  },
  {
    name: "Sport",
    grade: "~2,1",
    color: "#0000FF",
    checked: true,
  },
  {
    name: "Musik",
    grade: "~2,1",
    color: "#800080",
    checked: true,
  },
  {
    name: "Geschichte",
    grade: "~2,1",
    color: "yellow",
    checked: true,
  },
  // Liste der bereits ausgewählten Fächer
];

function SubjectScreen(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState(initialSubjects);

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSubjectToggle = (subject) => {
    const updatedSubjects = selectedSubjects.map((item) =>
      item.name === subject.name ? { ...item, checked: !item.checked } : item
    );
    setSelectedSubjects(updatedSubjects);
  };

  const handleSaveChanges = () => {
    setIsEditMode(false);
    const updatedSelectedSubjects = allPossibleSubjects.filter((subject) =>
      selectedSubjects.some(
        (selectedSubject) =>
          selectedSubject.name === subject.name && selectedSubject.checked
      )
    );

    setSelectedSubjects(updatedSelectedSubjects);
  };

  return (
    <Screen>
      <Text style={styles.title_1}>Meine</Text>
      <Text style={styles.title_2}>Fächer</Text>
      <View style={styles.container}>
        {isEditMode ? (
          <FlatList
            data={allPossibleSubjects}
            keyExtractor={(subject) => subject.name}
            renderItem={({ item }) => (
              <SubjectCheckBox
                name={item.name}
                color={item.color}
                onPress={() => handleSubjectToggle(item)}
                value={selectedSubjects.some(
                  (subject) => subject.name === item.name && subject.checked
                )}
              />
            )}
          />
        ) : (
          <FlatList
            data={selectedSubjects}
            keyExtractor={(subject) => subject.name}
            renderItem={({ item }) => (
              <SubjectItem
                title={item.name}
                grade={item.grade}
                color={item.color}
              />
            )}
          />
        )}
      </View>
      <ActiveButton
        text={isEditMode ? "Änderungen speichern" : "Bearbeiten"}
        onPress={isEditMode ? handleSaveChanges : handleToggleEditMode}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#002395",
    maxHeight: 500,
  },
  title_1: {
    fontSize: 23,
    color: "#FFD700",
  },
  title_2: {
    fontSize: 45,
    color: "#FFD700",
    marginBottom: 20,
  },
});

export default SubjectScreen;
