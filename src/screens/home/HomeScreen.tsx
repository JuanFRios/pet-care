import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";

import { ServicesStackParams } from "../../navigator/ServicesNavigator";
import { AuthContext } from "../../context/AuthContext";
import CategoryCard from "./CategoryCard";
import { categories } from "../../interfaces/appInterfaces";
import tw from "twrnc";
import { BackgroundHome } from "../../components/BackgroundHome";
import { ServicesContext } from "../../context/ServicesContext";

interface Props extends StackScreenProps<ServicesStackParams, "HomeScreen"> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { user, token, logOut } = useContext(AuthContext);
  const { services } = useContext(ServicesContext);

  useEffect(() => {
    if (!user) {
      logOut();
    }
    
  }, [user]);
  
  return (
    <ScrollView>

    <View style={{ flex: 1, paddingTop: 30 }}>
      <BackgroundHome />
      <View style={tw`h-44 px-4`}>
        <View style={tw`flex-row  items-center mt-10`}>
          <Text style={tw`text-2xl font-thin text-white`}>Hola, </Text>
          <Text style={tw`text-2xl font-bold text-white`}>
            {user?.nombreCompleto}
          </Text>
        </View>
        <Text style={tw`text-2xl font-light text-white`}>
          Qué deseas registrar?{" "}
        </Text>
      </View>
      <View style={tw`flex-row flex-wrap justify-center mt-10`}>
      {services.map((service) => (
        <TouchableOpacity
          key={service.id}
          style={{ marginRight: 10 }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("RegisterServiceScreen", {name: service.nombre, id: service.id})}
        >
          <CategoryCard image={service.id} name={service.nombre} />
        </TouchableOpacity>
      ))}
        </View>
    </View>
    </ScrollView>
  );
};
