import React from 'react';
import { useFormikContext } from "formik";
import { View, StyleSheet } from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, width, fontSize, color, textColor, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
    <AppTextInput 
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
        fontSize={fontSize}
        color={color}
        textColor={textColor}
        />
    <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppFormField;