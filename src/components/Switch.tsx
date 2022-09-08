import React from "react";
import { Text, TextInput, View } from "react-native";
import { RadioButton, Switch } from "react-native-paper";
import tw from "twrnc";

function SwitchInput({ titulo, setField, name, middleWidth }: any) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {setIsSwitchOn(!isSwitchOn); setField(name, !isSwitchOn)};

  return (
    <View style={tw`my-2 mx-2 ${middleWidth ? "w-6/12" : "w-full"}`}>
      <Text style={tw`my-0 pb-0 text-[#5856D6]`}>{titulo}</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
}

export default SwitchInput;
