/** The axios configuration. */
import axios from 'axios';
import Cookies from 'js-cookie';
import { refreshToken, setToken } from './user';

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8000',
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
    const config = error.config;
    if (
      error.response.status >= 400 &&
      error.response.status < 500 &&
      !config._retry
    ) {
      config._retry = true;
      const response = await refreshToken();
      const accessToken = response.access_token;
      setToken(accessToken);
      config.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(config);
    }
    return Promise.reject(error);
  }
);
