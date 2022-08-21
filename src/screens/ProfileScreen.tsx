import React from 'react'
import { Text, View, StyleSheet} from 'react-native';



export const ProfileScreen = () => {

    return (
        <View style={ styles.container }>
            <Text>Perfil</Text>
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