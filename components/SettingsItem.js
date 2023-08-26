import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SettingsItem({ title, onPress, collapsibleActive }) {
  const noCollapsible = collapsibleActive === undefined ? true : collapsibleActive;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.item}><AppText>{title}</AppText></View>
      {noCollapsible ? (
        <MaterialCommunityIcons size={20} name="chevron-right" color="#c3cdca" />
      ) : (
        <MaterialCommunityIcons size={20} name="chevron-down" color="#c3cdca" />
      )}
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