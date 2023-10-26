import axios from "axios";


const baseUrl = 'https://lptrader.vn'

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});


// Gởi access token lên server
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

export default instance;