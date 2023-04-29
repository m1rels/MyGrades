import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SettingsItem from './SettingsItem';

function SettingsContainer({heading}) {
  return (
    <View style={styles.container}>
        {heading &&
            <View style={styles.heading}>
                <Text style={styles.title}>{heading}</Text>
            </View>}
        <View>
            <SettingsItem title="Profil" />
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "#002395",
    width: "100%",
    padding: 20,
  },
  heading: {
    paddingBottom: 10,
    paddingLeft: 10
  },
  title: {
    color: "#FFD700",
    fontSize: 21,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "700"
  }
});

export default SettingsContainer;