import React from 'react'
import { Image, View } from 'react-native'
import tw from 'twrnc';
import { categories } from '../../interfaces/appInterfaces';



interface Iprops {
    category: categories;
}

const CartegoryLogo = ( {category}: Iprops ) => {
    switch (category) {
        case categories.medicine:

            return (
              <View style={{ alignItems: 'center' }}>
                  <Image style={tw`w-32 h-32`} source={require(`../../assets/medicine.png`)} />
              </View>
            );
        case categories.spa:
            return (
                <View style={{ alignItems: 'center' }}>
                    <Image style={tw`w-32 h-32`} source={require(`../../assets/spa.png`)} />
                </View>
            )
        case categories.kindergarten:
            return (
                <View style={{ alignItems: 'center' }}>
                    <Image style={tw`w-32 h-32`} source={require(`../../assets/kindergarten.png`)} />
                </View>
            )
        default:
            return null;
    }
}

export default CartegoryLogo