import React, { createContext, useEffect, useState } from "react";
import petCareApi from "../api/petCareApi";
import { Category, Service, HistoryResponse } from '../interfaces/appInterfaces';
import AsyncStorage from "@react-native-async-storage/async-storage";

type ServicesContextProps = {
  services: Category[];
  loadCategories: () => Promise<void>;
  loadServicesByCategory: (category: string) => Promise<Service[]>;
  saveServiceRegister: (service: any) => Promise<any>;
  loadServicesHistory: (
    categoria: string | null,
    servicio: string | null,
    fechaInicio: string | null,
    fechaFin: string | null
  ) => Promise<HistoryResponse>;
};

export const ServicesContext = createContext({} as ServicesContextProps);

export const ServicesProvider = ({ children }: any) => {
  const [services, setServices] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const token = await AsyncStorage.getItem("token");
    const resp = await petCareApi.get<Category[]>("/categorias");
    setServices([...resp.data]);
  };

  const loadServicesByCategory = async (category: string) => {
    const resp = await petCareApi.get<Service[]>(
      `/categorias/${category}/servicios`
    );
    return resp.data;
  };

  const saveServiceRegister = async (service: any) => {
    const resp = await petCareApi.post("/servicios-prestados", service);
    return resp.data;
  };

  const loadServicesHistory = async (
    categoria: string | null,
    servicio: string | null,
    fechaInicio: string | null,
    fechaFin: string | null
  ) => {
    const resp = await petCareApi.get("/servicios-prestados", {
      params: {
        idCategoria: categoria,
        idServicio: servicio,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
      },
    });
    return resp.data;
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        loadCategories,
        loadServicesByCategory,
        saveServiceRegister,
        loadServicesHistory,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
