import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Button } from 'react-native';
import Screen from '../components/Screen';
import SubjectDetails from '../components/SubjectDetails';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function SubjectDetailScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Screen>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons name='chevron-left' size={20} />
                <Text>Zurück</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons name='plus' size={40} />
            </TouchableOpacity>
        </View>
        <SubjectDetails borderColor="#0000FF" />
        <Modal visible={modalVisible} animationType='slide'>
          <Screen>
            <Button title='Add a new grade' onPress={() => setModalVisible(false)} />
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
    borderRadius: 25
  }
});

export default SubjectDetailScreen;