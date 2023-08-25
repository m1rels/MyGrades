import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import SubjectItem from '../components/SubjectItem';

const subjects = [
    {
        name: "Mathe",
        grade: "~2,1",
        color: "#0000FF"
    },
    {
        name: "Deutsch",
        grade: "~2,1",
        color: "#FF0000"
    },
    {
        name: "Englisch",
        grade: "~2,1",
        color: "#008000"
    },
    {
        name: "Physik",
        grade: "~2,1",
        color: "#FFA500"
    },
    {
        name: "Sport",
        grade: "~2,1",
        color: "#0000FF"
    },
    {
        name: "Musik",
        grade: "~2,1",
        color: "#800080"
    },
    {
        name: "Geschichte",
        grade: "~2,1",
        color: "yellow"
    }
]

function SubjectScreen(props) {
  return (
    <Screen>
        <Text style={styles.title_1}>Meine</Text>
        <Text style={styles.title_2}>Fächer</Text>
        <FlatList 
        data={subjects}
        keyExtractor={subject => subject.name}
        renderItem={({item}) => <SubjectItem title={item.name} grade={item.grade} color={item.color} bgColor="#002395"/>}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title_1: {
    fontSize: 23,
    color: "#FFD700"
  },
  title_2: {
    fontSize: 36,
    color: "#FFD700",
    marginBottom: 20
}
});

export default SubjectScreen;