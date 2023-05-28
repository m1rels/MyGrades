import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Checkbox from 'expo-checkbox';
import AppText from './AppText';

function AppCheckBox({name}) {

    const [isChecked, setChecked] = useState(false);


  return (
    <TouchableWithoutFeedback onPress={() => setChecked(!isChecked)}>
        <View style={styles.container}>
            <AppText style={styles.paragraph}>{name}</AppText>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#002395",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25
  },
  checkbox: {
    margin: 8,
    borderRadius: 25,
    height: 18,
    width: 18
  },
  paragraph: {
    fontWeight: "700",
  }
});

export default AppCheckBox;