/** The axios configuration. */
import axios from 'axios';
import { useEffect } from 'react';
import { useRefreshToken } from './user';
import { useAuth } from '@hooks/use-auth';

export const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const useAxiosClient = () => {
  const auth = useAuth();
  const fetchRefreshToken = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers) {
          config.headers = {};
        }
        config.headers.Authorization = `Bearer ${auth?.accessToken}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 403 && !originalRequest?._retry) {
          originalRequest._retry = true;
          const accessToken = await fetchRefreshToken();
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [auth, fetchRefreshToken]);

  return axiosInstance;
};
