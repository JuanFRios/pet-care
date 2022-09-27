import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://pet-care-db.herokuapp.com/api';

const petCareApi = axios.create({ baseURL });

petCareApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token && config.headers) {
            config.headers['Authorization'] = `bearer ${token}`;
        }
        return config;
    }
);



export default petCareApi;