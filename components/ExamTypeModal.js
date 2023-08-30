import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import * as Yup from "yup";
import WeightItem from "./WeightItem";
import ActiveButton from "./ActiveButton";
import Screen from "./Screen";
import SettingsContainer from "./SettingsContainer";

const validationSchema = Yup.object().shape({
  examType: Yup.string().required().label("Exam Type"),
  weight: Yup.string()
    .required()
    .max(1)
    .matches(/^[0-9]+$/, "Bitte nur Zahlen eingeben")
    .label("Weight"),
});

function ExamTypeModal({ onPress, visible, showSettingsContainer, selectedItem, handleSubmit, newExamType }) {
    
    const examTypeInitialValue = selectedItem ? selectedItem.title : "";
  const weightInitialValue = selectedItem ? selectedItem.weightNumber : "";

  return (
    <Modal visible={visible} animationType="slide">
      <Screen>
        <View style={styles.selector}>
          <View>
            {newExamType ? <Text style={styles.title_1}>Erstelle</Text> : <Text style={styles.title_1}>Ändere</Text>}
            <Text style={styles.title_2}>Prüfungsart</Text>
          </View>
          <View>
            <ActiveButton icon="close" size={40} onPress={onPress} />
          </View>
        </View>
        <AppForm
          initialValues={{ examType: examTypeInitialValue , weight: weightInitialValue }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
          <AppFormField
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            icon="text"
            name="examType"
          />
          <AppFormField
            placeholder="Gewichtung"
            autoCapitalize="none"
            autoCorrect={false}
            icon="weight"
            name="weight"
          />
          {showSettingsContainer && (
            <SettingsContainer>
              <AppText style={styles.subTitle}>Unter-Prüfungsarten</AppText>
              
              <WeightItem title="Stegreifaufgabe" weightNumber="1" />
              <WeightItem title="Mündlich" weightNumber="1" />
            </SettingsContainer>
          )}
          <SubmitButton title="Speichern" />
          <SubmitButton title="Löschen" />
        </AppForm>
      </Screen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginVertical: 30,
  },
  title_1: {
    fontSize: 18,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  title_2: {
    fontSize: 36,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  grade: {
    fontWeight: 700,
  },
  subTitle: {
    fontWeight: 700,
  },
});

export default ExamTypeModal;
