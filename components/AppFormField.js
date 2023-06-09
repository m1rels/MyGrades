import React from 'react';
import { useFormikContext } from "formik";
import { View, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
    <AppTextInput 
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        />
    <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppFormField;