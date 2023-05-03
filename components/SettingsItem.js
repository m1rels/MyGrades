import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SettingsItem({ title, text}) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.item}><AppText>{title}</AppText></View>
        <MaterialCommunityIcons size={20} name="chevron-right" color="#c3cdca"/> : <View style={styles.item}><AppText>{text}</AppText></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
});

export default SettingsItem;