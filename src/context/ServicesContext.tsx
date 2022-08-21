import React, { createContext, useEffect, useState } from 'react';
import petCareApi from '../api/petCareApi';
import { Service, ServicesResponse } from '../interfaces/appInterfaces';

type ServicesContextProps = {
    services: Service[];
    loadServices: () => Promise<void>;
}



export const ServicesContext = createContext({} as ServicesContextProps);



export const ServicesProvider = ({ children }: any ) => {

    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        loadServices();
    }, [])


    const loadServices = async() => {
        const resp = await petCareApi.get<ServicesResponse>('/servicios');
        setServices([ ...resp.data.servicios ]);
    }


    return(
        <ServicesContext.Provider value={{
            services,
            loadServices,
        }}>
            { children }
        </ServicesContext.Provider>
    )
}
