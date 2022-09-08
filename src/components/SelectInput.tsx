import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import tw from "twrnc";

interface IProps {
  title: string;
  setField: (name: string, value: any) => void;
  name: string;
  items: { label: string; value: string }[];
}

const SelectInput = ({ title, setField, name, items }: IProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Text style={tw`my-0 pb-0 text-[#5856D6]`}>{title}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          setField(name, itemValue);
        }}
      >
        {items.map((item) => (
          <Picker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </Picker>
    </View>
  );
};
export default SelectInput;
