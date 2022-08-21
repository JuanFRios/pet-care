import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterServiceScreen } from "../screens/RegisterServiceScreen";
import { HomeScreen } from "../screens/HomeScreen";

export type ServicesStackParams = {
  HomeScreen: undefined;
  RegisterServiceScreen: { id?: string; name?: string };
};

const Stack = createStackNavigator<ServicesStackParams>();

export const ServicesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Categorias" }}
      />

      <Stack.Screen
        name="RegisterServiceScreen"
        component={RegisterServiceScreen}
        options={{ title: "Registro de servicio" }}
      />
    </Stack.Navigator>
  );
};
