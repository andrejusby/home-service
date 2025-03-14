import { PROD } from "../consts/environment";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = PROD ? "PROD_LINK_TODO" : "http://localhost:3000";

const config: AxiosRequestConfig = {
  baseURL,
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      const parsedToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${parsedToken}`;
      console.log('Authorization Header:', config.headers.Authorization); // Pridetas spasdinimas
      
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
