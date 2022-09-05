import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc';
import { categories } from '../../interfaces/appInterfaces';
import CartegoryLogo from './CartegoryLogo';

interface IProps {
    name: string;
    image: categories;
}

const CategoryCard = ({image, name}: IProps) => {
  return (
    
    <View style={tw`my-3 p-3 max-w-sm items-center`}>
        <CartegoryLogo category={image}/>
        <Text style={tw`py-2 font-bold text-xl`}>{name}</Text>
    </View>
  )
}

export default CategoryCard