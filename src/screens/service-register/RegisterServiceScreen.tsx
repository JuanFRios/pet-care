import React from 'react'
import { Text, View, StyleSheet} from 'react-native';
import MedicineForm from './MedicineForm';
import tw from 'twrnc';



export const RegisterServiceScreen = () => {
    
    return (
        <View style={ styles.container }>
            <Text style={ tw`text-2xl text-gray-700 font-bold` }>Registrar Servicio Médico</Text>
            <MedicineForm />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 10,
        paddingHorizontal: 10
    },
});
