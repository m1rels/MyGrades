import React from "react";
import { useFormikContext } from "formik";

import Picker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  name,
  placeholder,
  width,
  title,
  data,
  setData,
  selectOne,
  subject,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        title={title}
        data={data}
        setData={setData}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
        width={width}
        selectOne={selectOne}
        subject={subject}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
