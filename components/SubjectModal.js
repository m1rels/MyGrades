import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import defaultStyles from "../config/styles";
import AppCheckBox from './AppCheckBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SubjectCheckBox from './SubjectCheckBox';

function SubjectModal({ visible, onRequestClose, title, data, setData, onPress, onSelectItem }) {
  const [contentHeight, setContentHeight] = useState(0);

  const handleContentLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };

  const handleCheckboxChange = (itemId) => {
    const newData = data.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          checked: item.checked === false ? true : false, // Wechsel zwischen 0 und 1
        };
      }
      return item;
    });
    setData(newData);
  };
  

  useEffect(() => {
    if (visible) {
      setContentHeight(0);
    }
  }, [visible]);

  return (
    <>
    
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      animationType='slide'
      style={styles.modal}
    >
      
      <View style={styles.modalContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.modalOutside}>

        </View>
      </TouchableOpacity>
        <View
          style={[styles.modalContent, { height: contentHeight > 0 ? contentHeight : 'auto' }]}
          onLayout={handleContentLayout}
        >
        <Text style={[defaultStyles.text, styles.modalTitle]}>{title}</Text>
        <FlatList 
                  data={data}
                  renderItem={({item}) => 
                  <SubjectCheckBox 
                    name={item.text} 
                    onPress={() => {
                      handleCheckboxChange(item.id);
                  }}
                    color={item.color}
                    value={item.checked}
                    onValueChange={() => handleCheckboxChange(item.id)}
                   />}
                  keyExtractor={item => item.id}
                  scrollEnabled="true"
                  />
        </View>
      </View>
    </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#002395",
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: 700
  },
  modalOutside: {
    height: "100%",
  },
});

export default SubjectModal;