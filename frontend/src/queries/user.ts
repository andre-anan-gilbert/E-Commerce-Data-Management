/** The user queries. */
import { axiosInstance } from './axios';
import Cookies from 'js-cookie';

interface IUser {
  email: string;
}

interface IToken {
  access_token: string;
}

export const signUp = async (email: string, password: string) => {
  const response = await axiosInstance.post<IToken>(
    'api/v1/user/sign-up',
    {
      email: email,
      password: password,
    },
    { withCredentials: true }
  );
  return response;
};

export const signIn = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  const response = await axiosInstance.post<IToken>(
    'api/v1/user/sign-in',
    formData,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const refreshToken = async () => {
  const response = await axiosInstance.post<IToken>(
    'api/v1/user/refresh-token',
    {
      withCredentials: true,
    }
  );
  return response;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get<IUser>('api/v1/user/me');
  return response;
};

export const setToken = (accessToken: string) => {
  const fifteenMinutes = 1 / 96;
  Cookies.set('tok', accessToken, { expires: fifteenMinutes });
};
