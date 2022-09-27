import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigator/Navigator";
import { AuthProvider } from "./src/context/AuthContext";
import { RootSiblingParent } from 'react-native-root-siblings';
import TabNavigator from "./src/navigator/TabNavigator";
import { SafeAreaView } from "react-native";

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

const App = () => {
  return (
    <RootSiblingParent> 

    <NavigationContainer>
      <AppState>
        <SafeAreaView style={{flex: 1}}>
          <Navigator />
        </SafeAreaView>
      </AppState>
    </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
