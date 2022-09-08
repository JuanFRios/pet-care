import React from "react";
import { Text, TextInput, View } from "react-native";
import { RadioButton } from "react-native-paper";
import tw from "twrnc";

function RadioGroup({ titulo, handleChange, value, middleWidth, items }: any) {
  return (
    <View style={tw`my-2 mx-2 ${middleWidth ? "w-6/12" : "w-full"}`}>
      <Text style={tw`my-0 pb-0 text-[#5856D6]`}>{titulo}</Text>
      <RadioButton.Group onValueChange={handleChange} value={value}>
        <View style={tw`justify-center`}>
          {items.map((item: any) => (
            <View style={tw`flex-row items-center`} key={item.value}>
              <Text style={tw`text-gray-700`}>{item.label}</Text>
              <RadioButton value={item.value} />
            </View>
          ))}
        </View>
      </RadioButton.Group>
    </View>
  );
}

export default RadioGroup;
