import React, { useEffect } from "react";
import { View, Text } from "react-native";
import {
  HistoryService,
  Categoria,
  categories,
} from "../../interfaces/appInterfaces";
import tw from "twrnc";
import { currencyFormat } from "../service-register/initial-values";
import { Background } from "../../components/Background";
import Especie from "./Especie";

export interface IProps {
  item: HistoryService;
}

const ItemService = ({ item }: IProps) => {
  const [color, setColor] = React.useState("blue-400");
  const [colorText, setColorText] = React.useState("blue-800");
  useEffect(() => {
    if (item.servicio.categoria.id === categories.spa) {
      setColor("yellow-400");
      setColorText("yellow-800");
    } else if (item.servicio.categoria.id === categories.kindergarten) {
      setColor("blue-400");
      setColorText("blue-800");
    } else if (item.servicio.categoria.id === categories.medicine) {
      setColor("green-400");
      setColorText("green-800");
    }
  }, [item]);

  return (
    <View
      style={tw`bg-slate-50 my-2 mx-1 rounded-lg shadow-md border-2 border-${color}`}
    >
      <View style={tw`flex-row justify-end `}>
        <ChipCategory
          categoria={item.servicio.categoria}
          color={color}
          textColor={colorText}
        />
      </View>
      <View style={tw`w-full p-2 flex-row justify-between`}>
        <View style={tw`w-4/12 flex-row justify-center`}>
        <Especie especie={item.especie}/>
        </View>
        <View style={tw`flex-col w-8/12`}>
          <View style={tw`flex-row`}>
            <Text style={tw`text-sm font-bold`}>Paciente:</Text>
            <Text style={tw`text-sm font-normal`}>
              {" " + item.nombrePaciente}
            </Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`text-sm font-bold`}>Fecha:</Text>
            <Text style={tw`text-sm font-normal`}>{" " + item.fecha}</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`text-sm font-bold`}>Servicio:</Text>
            <Text style={tw`text-sm font-normal`}>{" " + item.servicio.nombre}</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`text-sm font-bold`}>Valor:</Text>
            <Text style={tw`text-sm font-normal`}>
              {" " + currencyFormat(item.total)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

interface IPropsChip {
  categoria: Categoria;
  color: string;
  textColor: string;
}

const ChipCategory = ({ categoria, color, textColor }: IPropsChip) => {
  return (
    <View style={tw`w-5/12 bg-${color} rounded-tr-sm rounded-bl-lg`}>
      <Text
        style={tw`text-${textColor} text-center text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  `}
      >
        {categoria.nombre}
      </Text>
    </View>
  );
};

export default ItemService;
