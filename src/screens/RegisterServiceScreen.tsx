import React from 'react'
import { Text, View, StyleSheet} from 'react-native';



export const RegisterServiceScreen = () => {

    return (
        <View style={ styles.container }>
            <Text>Nuevo registro de servicio</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 10,
        marginHorizontal: 20
    },
});
