import React from 'react'
import { Text, View, StyleSheet} from 'react-native';
import MedicineForm from './MedicineForm';
import tw from 'twrnc';
import { categories } from '../../interfaces/appInterfaces';
import SpaForm from './SpaForm';
import { StackScreenProps } from "@react-navigation/stack";
import { ServicesStackParams } from "../../navigator/ServicesNavigator";
import { ServicesContext } from '../../context/ServicesContext';
import KindergartenForm from './KindergartenForm';
import Toast from 'react-native-root-toast';

interface Props extends StackScreenProps<ServicesStackParams, "RegisterServiceScreen"> {}

export const RegisterServiceScreen = ({route, navigation}: Props) => {
    const { name, id } = route.params;
    const { saveServiceRegister } = React.useContext(ServicesContext);
    const onSubmited = (values: any) => {
        saveServiceRegister(values);
        Toast.show('Registro guardado exitosamente.', {
            duration: 2000
          });
        navigation.navigate("HomeScreen");
    }
    return (
        <View style={ styles.container }>
            <Text style={ tw`text-2xl text-gray-700 font-bold` }>Nuevo registro de {name}</Text>
            {id === categories.medicine && <MedicineForm onSubmit={onSubmited}/>}
            {id === categories.spa && <SpaForm onSubmit={onSubmited}/>}
            {id === categories.kindergarten && <KindergartenForm onSubmit={onSubmited}/>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 40,
        paddingHorizontal: 10
    },
});
