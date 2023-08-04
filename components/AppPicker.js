import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppText from './AppText';
import CheckBoxModal from "./CheckBoxModal";

function AppPicker({ title, data, setData, onSelectItem }) {

  const [modalVisible, setModalVisible] = useState("false");
  
  return (
    <>
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <AppText>
            {title}
        </AppText>
        <MaterialCommunityIcons name='arrow-right' size={20} style={styles.icon} />
        </TouchableOpacity>
        <CheckBoxModal visible={modalVisible} onPress={() => setModalVisible(false)} title={title} data={data} setData={setData} onSelectItem={onSelectItem} closeModal={() => setModalVisible(false)} />
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