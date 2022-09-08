import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";

import { ServicesStackParams } from "../../navigator/ServicesNavigator";
import { AuthContext } from "../../context/AuthContext";
import CategoryCard from "./CategoryCard";
import { categories } from "../../interfaces/appInterfaces";
import tw from "twrnc";
import { BackgroundHome } from "../../components/BackgroundHome";

interface Props extends StackScreenProps<ServicesStackParams, "HomeScreen"> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { user, token, logOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <BackgroundHome />
      <View style={tw`h-44 px-4`}>
        <View style={tw`flex-row  items-center mt-10`}>
          <Text style={tw`text-2xl font-thin text-white`}>Hola, </Text>
          <Text style={tw`text-2xl font-bold text-white`}>Juan Ríos</Text>
        </View>
        <Text style={tw`text-2xl font-light text-white`}>Qué deseas registrar? </Text>
      </View>
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
