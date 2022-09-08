import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc';

interface IProps {
    title: string;
    icon: any;
}

const SubtitleForm = ({title, icon}: IProps) => {
  return (
    <View style={tw`flex-row items-center w-full border-b-2 border-[#5856D6]`}>
      <Ionicons name={icon} size={20} color="black" />
        <Text style={tw`text-xl font-bold text-gray-700`}>{title}</Text>
    </View>
  )
}

export default SubtitleForm