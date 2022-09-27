import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import tw from "twrnc";
import { AuthContext } from "../../context/AuthContext";
import { ServicesContext } from "../../context/ServicesContext";
import {
  HistoryResponse,
  HistoryService,
} from "../../interfaces/appInterfaces";
import { currencyFormat } from "../service-register/initial-values";
import ItemService from "./ItemService";

export const ServicesHistoryScreen = () => {
  const { loadServicesHistory, services } = useContext(ServicesContext);
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [fechaInicio, setFechaInicio] = React.useState<Date | null>(null);
  const [fechaFin, setFechaFin] = React.useState<Date | null>(null);
  const [showInicial, setShowInicial] = React.useState(false);
  const [showFinal, setShowFinal] = React.useState(false);
  const [filteredItems, setFilteredItems] = React.useState<HistoryResponse>();
  const fetchData = async () => {
    const data = await loadServicesHistory(null, null, null, null);
    setFilteredItems(data);
  };
  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, []);

  const onChangeFechaInicio = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowInicial(false);
    setFechaInicio(currentDate);
  };

  const onChangeFechaFinal = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowFinal(false);
    setFechaFin(currentDate);
  };

  const handleSearch = () => {
    loadServicesHistory(
      categoryFilter,
      null,
      fechaInicio?.toLocaleDateString() || null,
      fechaFin?.toLocaleDateString() || null
    ).then((data) => setFilteredItems(data));
  };

  const handleClear = () => {
    setCategoryFilter("");
    setFechaInicio(null);
    setFechaFin(null);
    fetchData();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={tw`flex-row justify-start`}>
          <Text style={tw`text-lg font-bold px-2`}>Filtros</Text>
          <Ionicons name="filter" size={30} color={"#000"} />
        </View>
        <View
          style={tw`w-full p-2 border border-gray-400 p-2 rounded-lg bg-gray-200`}
        >
          <View style={tw`w-full border mb-2 border-gray-400 rounded-lg`}>
            <Picker
              selectedValue={categoryFilter}
              onValueChange={(itemValue) => {
                setCategoryFilter(itemValue);
              }}
            >
              <Picker.Item label="Seleccione una categoría" value={null} />
              {services.map((item) => (
                <Picker.Item
                  label={item.nombre}
                  value={item.id}
                  key={item.id}
                />
              ))}
            </Picker>
          </View>
          <View
            style={tw`w-full flex-row justify-between items-center border border-gray-400 rounded-lg mb-2 p-2`}
          >
            <Text>
              Fecha inicial: {fechaInicio?.toLocaleDateString() || "Ninguna"}
            </Text>
            <Pressable
              style={tw`border border-[#5856D6] px-2 py-1 rounded-lg flex-row justify-center mx-1`}
              onPress={() => setShowInicial(true)}
            >
              <Text style={tw`text-[#5856D6]`}>Elegir</Text>
            </Pressable>
            {showInicial && (
              <RNDateTimePicker
                testID="dateTimePickerFechaInicio"
                value={fechaInicio || new Date()}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChangeFechaInicio}
              />
            )}
          </View>
          <View
            style={tw`w-full flex-row justify-between items-center border border-gray-400 rounded-lg mb-2 p-2`}
          >
            <Text>
              Fecha final: {fechaFin?.toLocaleDateString() || "Ninguna"}
            </Text>
            <Pressable
              style={tw`border border-[#5856D6] px-2 py-1 rounded-lg flex-row justify-center mx-1`}
              onPress={() => setShowFinal(true)}
            >
              <Text style={tw`text-[#5856D6]`}>Elegir</Text>
            </Pressable>
            {showFinal && (
              <RNDateTimePicker
                testID="dateTimePickerFechaFin"
                value={fechaFin || new Date()}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChangeFechaFinal}
              />
            )}
          </View>

          <View style={tw`w-full flex-row justify-center items-center`}>
            <Pressable
              style={tw`border border-gray-600 p-2 rounded-lg w-4/12 flex-row justify-center mx-1`}
              onPress={handleClear}
            >
              <Text style={tw`text-gray-600`}>Limpiar</Text>
            </Pressable>
            <Pressable
              style={tw`border border-[#5856D6] bg-[#5856D6] p-2 rounded-lg w-4/12 flex-row justify-center mx-1`}
              onPress={handleSearch}
            >
              <Text style={tw`text-white`}>Filtrar</Text>
            </Pressable>
          </View>
        </View>
        <View style={tw`w-full flex-row justify-end items-center`}>
          <Text style={tw`text-lg font-bold px-2`}>Total Ventas</Text>
          <Text style={tw`text-lg font-bold`}>{currencyFormat(filteredItems?.totalVentas || 0)}</Text>
        </View>
        {filteredItems?.serviciosPrestados.map((item) => (
          <ItemService key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
});
