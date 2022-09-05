import React, { useContext } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native';
import { AuthContext } from '../context/AuthContext';



export const ProfileScreen = () => {
    const { user, token, logOut } = useContext(AuthContext);
    return (
        <View style={ styles.container }>
            <Text>Perfil</Text>
            <Button title="logout" color="#5856D6" onPress={logOut} />
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