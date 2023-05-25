import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppText from './AppText';
import AppModal from "./AppModal";

function AppPicker({ title, buttonText, children }) {

  const [modalVisible, setModalVisible] = useState("false");

  return (
    <>
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <AppText>
            {title}
        </AppText>
        <MaterialCommunityIcons name='arrow-right' size={20} style={styles.icon} />
        </TouchableOpacity>
        <AppModal visible={modalVisible} onPress={() => setModalVisible("false")} buttonText={buttonText} children={children} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#002395",
    padding: 15,
    borderRadius: 25
  },
  icon: {
    color: "#F0F8FF"
  },
  modal: {
    justifyContent: "flex-end",
    flex: 0.5,
    backgroundColor: "yellow",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 40
  },
});

export default AppPicker;