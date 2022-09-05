import React from 'react'
import { Text, TextInput, View } from 'react-native'
import tw from 'twrnc';

function Input({titulo, placeholder, handleChange, handleBlur, value }: any) {
  return (
    <View style={tw`my-2`}>
    <Text style={tw`my-0 pb-0 text-[#5856D6]`}>{titulo}</Text>
    <TextInput
    style={tw`border-b border-gray-500 w-full pb-1 mt-0 pt-0 px-3 pl-0 text-gray-700 h-8 text-sm focus:outline-none hover:border-[#5856D6] bg-transparent`}
    onChangeText={handleChange}
    onBlur={handleBlur}
    placeholder={placeholder}
    value={value}
  />
    </View>
  )
}

export default Input