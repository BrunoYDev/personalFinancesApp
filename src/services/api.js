import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.77.230:3333/'
});

export default api;