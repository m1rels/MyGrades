import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GradeItem from './GradeItem';
import defaultStyles from "../config/styles";

function SubjectDetails({borderColor}) {
  return (
    <>
        <View style={styles.header}>
            <Text style={[defaultStyles.text, styles.text]}>Mathe</Text>
            <Text style={[defaultStyles.text, styles.text]}>~2,1</Text>
        </View>
        <View style={[styles.container, {borderColor: borderColor}]}>
            <Text style={[defaultStyles.text, styles.subHeading]}>Prüfungen</Text>
            <GradeItem />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#002395",
    minHeight: 500,
    borderRadius: 25,
    padding: 25,
    borderWidth: 5,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    paddingHorizontal: 25,
    marginBottom: 10
  },
  text: {
    fontWeight: "900",
    fontSize: 21
  },
  subHeading: {
    marginBottom: 10,
    fontWeight: 700,
    textDecorationLine: "underline"
  }
});

export default SubjectDetails;