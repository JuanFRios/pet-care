import { FormikErrors, FormikTouched, useFormikContext } from 'formik';
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import tw from 'twrnc';

function Input({titulo, placeholder, handleChange, handleBlur, value, middleWidth, name }: any) {
  const { errors,touched } = useFormikContext();
  return (

    <View style={tw`mt-2 mx-2 ${middleWidth ? 'w-6/12' : 'w-full'}`}>
    <Text style={tw`my-0 pb-0 text-[#5856D6]`}>{titulo}</Text>
    <TextInput
    style={tw`border-b border-gray-500 w-full pb-1 mt-0 pt-0 px-3 pl-0 text-gray-700 h-8 text-sm focus:outline-none hover:border-[#5856D6] bg-transparent`}
    onChangeText={handleChange}
    onBlur={handleBlur}
    placeholder={placeholder}
    value={value}
  />
    {errors[name as keyof FormikErrors<unknown>] && touched[name as keyof FormikTouched<unknown>] && <Text style={tw`text-red-500 text-sm`}>{errors[name as keyof FormikErrors<unknown>]}</Text>}
    </View>
  
  )
}

export default Input