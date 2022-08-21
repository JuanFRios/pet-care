import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";

import { ServicesStackParams } from "../navigator/ServicesNavigator";
import { AuthContext } from "../context/AuthContext";

interface Props extends StackScreenProps<ServicesStackParams, "HomeScreen"> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { user, token, logOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text>Hola, Juan Ríos</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate("RegisterServiceScreen", {})}
      >
        <Text>Agregar registro</Text>
      </TouchableOpacity>
      <Button title="logout" color="#5856D6" onPress={logOut} />

    </View>
  );
};

