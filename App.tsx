import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigator/Navigator";
import { AuthProvider } from "./src/context/AuthContext";
import { ServicesProvider } from "./src/context/ServicesContext";
import TabNavigator from "./src/navigator/TabNavigator";
import { SafeAreaView } from "react-native";

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SafeAreaView style={{flex: 1}}>
          <Navigator />
        </SafeAreaView>
      </AppState>
    </NavigationContainer>
  );
};

export default App;
