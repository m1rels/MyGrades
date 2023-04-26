import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SettingsItem(props) {
  return (
    <TouchableOpacity style={styles.container}>
        <AppText>Email</AppText>
        <MaterialCommunityIcons size={20} name="chevron-right" color="#c3cdca"/> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  }
});

export default SettingsItem;