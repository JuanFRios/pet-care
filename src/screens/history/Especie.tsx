import React from "react";
import { Image, View } from "react-native";
import tw from "twrnc";

const Especie = ({ especie }: any) => {
  switch (especie) {
    case "canino":
      return (
        <View style={tw`pl-4`}>
          <Image
            style={tw`w-12 h-16 `}
            source={require(`../../assets/perro.png`)}
          />
        </View>
      );
    case "felino":
      return (
        <View>
          <Image
            style={tw`w-16 h-20`}
            source={require(`../../assets/gato.png`)}
          />
        </View>
      );

    default:
      return null;
  }
  return (
    <View>
      <Image style={tw`w-16 h-20`} source={require(`../../assets/perro.png`)} />
    </View>
  );
};

export default Especie;
