import axios from 'axios'
import router from "@/router";

// Create an axios instance.
const service = axios.create({
    baseURL: 'http://127.0.0.1:9963',
    timeout: 5000
});

// Request interceptor
service.interceptors.request.use(config => {
    // Do something before require is sent
    // Such as setting request headers.
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Response interceptor
service.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.log(error.response.status);
    if (error.response.status === 404) {
        router.push('/404')
    }
    console.log('error: ', error);
    console.log('status: ', error.response.status);
    console.log('headers: ', error.response.headers);
});

export default service;
