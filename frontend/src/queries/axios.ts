/** The axios configuration. */
import axios from 'axios';
import Cookies from 'js-cookie';
import { refreshToken, setToken } from './user';

export const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  const accessToken = Cookies.get('tok');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await refreshToken();
      const accessToken = response.access_token;
      setToken(accessToken);
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
