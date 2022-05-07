import Axios from "axios"
import { toast } from 'react-toastify';
// Set config defaults when creating the instance
const axios = Axios.create({
    baseURL: process.env.api_url,
    params: {
        api_key: process.env.api_key
    }
  });
  
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

const apiRequest = async (payload) => {
    try {
        return axios.request(payload).catch((error) => { toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })});   
    } catch (error) {
        toast.error(
            '🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }
        )
    }
}

export default apiRequest