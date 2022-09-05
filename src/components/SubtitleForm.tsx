import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc';

interface IProps {
    title: string;
}

const SubtitleForm = ({title}: IProps) => {
  return (
    <View style={tw`flex w-full`}>
        <Text style={tw`text-xl font-bold text-gray-700`}>{title}</Text>
    </View>
  )
}

export default SubtitleForm