import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";

import { ServicesStackParams } from "../../navigator/ServicesNavigator";
import { AuthContext } from "../../context/AuthContext";
import CategoryCard from "./CategoryCard";
import { categories } from "../../interfaces/appInterfaces";
import tw from "twrnc";

interface Props extends StackScreenProps<ServicesStackParams, "HomeScreen"> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { user, token, logOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <View style={tw`flex-row  items-center mt-10`}>
        <Text style={tw`text-2xl font-thin`}>Hola, </Text>
        <Text style={tw`text-2xl font-bold text-[#5856D6]`}>Juan Ríos</Text>
      </View>
      <Text style={tw`text-2xl font-light`}>Qué deseas registrar? </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate("RegisterServiceScreen", {})}
      ></TouchableOpacity>
      <View style={tw`flex flex-row justify-center`}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate("RegisterServiceScreen", {})}
        >
          <CategoryCard image={categories.medicine} name="Medicina" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate("RegisterServiceScreen", {})}
        >
          <CategoryCard image={categories.kindergarten} name="Guarderia" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate("RegisterServiceScreen", {})}
      >
        <CategoryCard image={categories.spa} name="Spa" />
      </TouchableOpacity>
    </View>
  );
};
