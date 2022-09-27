import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, Image, Pressable } from "react-native";
import { AuthContext } from "../context/AuthContext";
import tw from "twrnc";
import { BackgroundProfile } from "../components/BackgroundProfile";
import { Ionicons } from '@expo/vector-icons';

export const ProfileScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <BackgroundProfile />
      <View style={tw`flex items-center bg-[#5856D6] p-8`}>
        <Image
          style={tw`w-36 h-36 rounded-full`}
          source={{
            uri:
              user?.urlImagen ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
          }}
        />
        <Text style={tw`text-2xl font-bold text-white`}>
          {user?.nombreCompleto}
        </Text>
        <Text style={tw`text-white font-medium text-lg italic`}>
          {user?.usuario}
        </Text>
      </View>
      <Pressable
              style={tw`border border-gray-600 p-2 w-full rounded-full flex-row justify-center my-5 items-center`}
              onPress={logOut}
            >
                <Ionicons name="log-out-outline" size={24} color="black" />
              <Text style={tw`text-gray-600`}>Cerrar sesión</Text>
            </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
