import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Modal, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Screen from "../components/Screen";
import SettingsContainer from "../components/SettingsContainer";
import SettingsItem from "../components/SettingsItem";
import ActiveButton from "../components/ActiveButton";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import defaultStyles from "../config/styles";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  grade: Yup.string().required("Die Klasse muss angegeben werden").max(2, "Die Zahl darf höchstens zwei Charaktere haben").matches(/^[0-9]+$/, 'Bitte nur Zahlen eingeben').label("Grade"),
  label: Yup.string().max(5).label("Label"),
});

function SettingsScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState("false");

  const [contentHeight, setContentHeight] = useState(0);

  const handleContentLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };

  useEffect(() => {
    if (modalVisible) {
      setContentHeight(0);
    }
  }, [modalVisible]);


  return (
    <Screen>
      <Text style={styles.title}>Einstellungen</Text>
      <SettingsContainer heading="Mirel Korajac">
        <SettingsItem title="Profil" onPress={() => navigation.navigate("Profile")} />
      </SettingsContainer>
      <SettingsContainer heading="10. Klasse 10e">
        <SettingsItem title="Klasse ändern" onPress={() => setModalVisible(true)} />
        <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.modalOutside}></View>
          </TouchableOpacity>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={[
              styles.modalContent,
              { height: contentHeight > 0 ? contentHeight : "auto" },
            ]}
            onLayout={handleContentLayout}
          >
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
                label: ""
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <AppFormField
                  placeholder="Klasse"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="school"
                  name="grade"
                  fontSize={18}
                  width={120}
                  backgroundColor="#002366"
                />
                <AppFormField
                  placeholder="Bezeichnung"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="script-text"
                  name="label"
                  fontSize={18}
                  width={200}
                  backgroundColor="#002366"
                />
                <SubmitButton
                  title="Speichern"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
                </AppForm>
                </View>
                </KeyboardAvoidingView>
                </View>
                </Modal>
        <SettingsItem title="Bewertungssystem" />
        <SettingsItem title="Schuljahr wechseln" />
      </SettingsContainer>
      <Text style={[defaultStyles.text, styles.subTitle]}>Links</Text>
      <SettingsContainer>
        <SettingsItem title="Hilfe" />
        <SettingsItem title="Support kontaktieren" />
        <SettingsItem title="Weiterempfehlen" />
        <SettingsItem title="Bewerte uns" />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem title="Nutzungsbedingungen" />
        <SettingsItem title="Datenschutzbestimmungen" />
      </SettingsContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 36,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  subTitle: {
    fontWeight: "700",
    fontSize: 21,
    marginTop: 10,
  },
  buttonModal: {
    display: "flex",
    alignItems: "flex-end",
  },
  modalOutside: {
    height: "100%",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#002395",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default SettingsScreen;
