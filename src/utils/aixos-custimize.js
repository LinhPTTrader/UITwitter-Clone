import axios from "axios";


const baseUrl = 'http://localhost:3000'

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});


// Gởi access token lên server
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

export default instance;