import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../context/AuthContext";

import { LoginScreen } from "../screens/LoginScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export const Navigator = () => {
  const { status } = useContext(AuthContext);

  if (status === "checking") return <LoadingScreen />;
  if (status === "authenticated") return <TabNavigator />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </>
    </Stack.Navigator>
  );
};
