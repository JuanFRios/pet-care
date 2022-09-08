import React from "react";
import { View } from "react-native";
import WavyBackground from "react-native-wavy-background";

export const BackgroundHome = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <WavyBackground
        height={300}
        width={1100}
        amplitude={45}
        frequency={2}
        offset={250}
        color="#5856D6"
        
      />
    </View>
  );
};
