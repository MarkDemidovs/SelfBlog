import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

API.interceptors.request.use(config => {
    return config;
});

export default API;