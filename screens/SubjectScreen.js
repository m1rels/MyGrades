import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import SubjectItem from "../components/SubjectItem";
import {
  calculateSubjectAverage,
  calculateTotalAverage,
} from "../hooks/calculateAverage";

function SubjectScreen({ navigation }) {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Mathe",
      color: "blue",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 2,
      name: "Deutsch",
      color: "orange",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 3,
      name: "Englisch",
      color: "green",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 4,
      name: "Französisch",
      color: "blue",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 5,
      name: "Latein",
      color: "orange",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 6,
      name: "Spanisch",
      color: "orange",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 7,
      name: "Physik",
      color: "orange",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 8,
      name: "Biologie",
      color: "green",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 9,
      name: "Chemie",
      color: "blue",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 10,
      name: "Geographie",
      color: "brown",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 12,
      name: "Geschichte",
      color: "orange",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 13,
      name: "Sport",
      color: "blue",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 14,
      name: "Musik",
      color: "prurple",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 15,
      name: "Kunst",
      color: "yellow",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 16,
      name: "Religion",
      color: "pink",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    {
      id: 17,
      name: "Ethik",
      color: "purple",
      checked: false,
      grades: [2, 4, 6, 2],
    },
    // Weitere Elemente hinzufügen...
  ]);

  const TotalAverage = calculateTotalAverage(subjects);

  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <Text style={styles.title_1}>Meine</Text>
          <Text style={styles.title_2}>Fächer</Text>
        </View>
        <Text style={styles.title_2}>⌀ {TotalAverage}</Text>
      </View>
      <FlatList
        data={subjects}
        keyExtractor={(subject) => subject.name}
        renderItem={({ item }) => {
          const averageGrade = calculateSubjectAverage(item.grades);
          return (
            <SubjectItem
              title={item.name}
              grade={averageGrade}
              color={item.color}
              bgColor="#002395"
              onPress={() => navigation.navigate("Subject", item)}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  title_1: {
    fontSize: 23,
    color: "#FFD700",
  },
  title_2: {
    fontSize: 36,
    color: "#FFD700",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SubjectScreen;
