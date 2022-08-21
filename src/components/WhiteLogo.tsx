import React from "react";
import { Image, View } from "react-native";

export const WhiteLogo = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/Logo.png")} />
    </View>
  );
};
