import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import AppButton from "./AppButton";

const CustomModal = ({ visible, onRequestClose, onPress, buttonText, children }) => {
  const [contentHeight, setContentHeight] = useState(0);

  const handleContentLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };

  useEffect(() => {
    if (visible) {
      setContentHeight(0);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      animationType='slide'
    >
      <View style={styles.modalContainer}>
        <View
          style={[styles.modalContent, { height: contentHeight > 0 ? contentHeight : 'auto' }]}
          onLayout={handleContentLayout}
        >
          {children}
          <AppButton buttonText={buttonText} onPress={onPress} />
          {/* Weitere Inhalte hier */}
        </View>
      </View>
    </Modal>
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
    backgroundColor: "#002395"
  },
});

export default CustomModal;
