import axios from 'axios';

const BASE_URL = "http://10.0.0.206:3000";

export const api = axios.create({
    baseURL: BASE_URL,
});