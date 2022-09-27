import React, { useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import tw from "twrnc";
import { FormikErrors, FormikTouched, useFormikContext } from "formik";

interface IProps {
  title: string;
  setField: (name: string, value: any) => void;
  setPrice: (price: number) => void;
  name: string;
  items: { label: string; value: string, precio: number }[];
}

const SelectInput = ({ title, setField, name, items, setPrice }: IProps) => {
  const { errors, touched } = useFormikContext();
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Text style={tw`my-0 mx-2 pb-0 text-[#5856D6]`}>{title}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          const precio = items.find((item) => item.value === itemValue)?.precio || 0;
          setPrice(precio);
          setSelectedLanguage(itemValue);
          setField(name, itemValue);
        }}
      >
        <Picker.Item label="Seleccione una opción" value={null}/>
        {items.map((item) => (
          <Picker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </Picker>
      {errors[name as keyof FormikErrors<unknown>] && touched[name as keyof FormikTouched<unknown>] && <Text style={tw`text-red-500 text-sm`}>{errors[name as keyof FormikErrors<unknown>]}</Text>}
    </View>
  );
};
export default SelectInput;
