import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function SettingsItem({icon, text}) {
  return (
    <View style={styles.container}>
        <AppText>Email</AppText>
        {icon ? <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="#c3cdca"/> :
        <Text style={defaultStyles.text}>{text}</Text>}
    </View>
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