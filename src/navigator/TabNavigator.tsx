import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTab from "./CustomTab";
import { Ionicons } from "@expo/vector-icons";
import { ServicesNavigator } from './ServicesNavigator';
import { ProfileScreen } from "../screens/ProfileScreen";
import { ServicesHistoryScreen } from "../screens/ServicesHistoryScreen";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTab activeBackgroundColor={"#5856D6"} activeTintColor={"#fff"} inactiveBackgroundColor={"transparent"} inactiveTintColor={"gray"} {...props} />}
>
<Tab.Screen
        name="Home"
        component={ServicesNavigator}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={ServicesHistoryScreen}
        options={{
          title: "Historico",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;