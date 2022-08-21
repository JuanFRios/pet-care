import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://mlearner-prod.herokuapp.com/api';

const petCareApi = axios.create({ baseURL });

petCareApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token && config.headers) {
            config.headers['x-token'] = token;
        }
        return config;
    }
);



export default petCareApi;