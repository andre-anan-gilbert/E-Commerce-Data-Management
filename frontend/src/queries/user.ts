/** The user queries. */
import { axiosInstance, BASE_URL } from './axios';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

interface IUser {
  email: string;
}

interface IToken {
  access_token: string;
}

export const signUp = async (email: string, password: string) => {
  const response = await axiosInstance.post<IToken>('api/v1/user/sign-up', {
    email: email,
    password: password,
  });
  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  const response = await axiosInstance.post<IToken>(
    'api/v1/user/sign-in',
    formData
  );
  return response.data;
};

export const refreshToken = async () => {
  const response = await axiosInstance.post<IToken>(
    'api/v1/user/refresh-token'
  );
  return response.data;
};

export const useFetchUser = () => {
  const { data, error, isError, isLoading } = useQuery<IUser, Error>(
    'user',
    fetchUser,
    {
      retry: 3,
    }
  );

  return { data, error, isError, isLoading };
};

const fetchUser = async () => {
  const accessToken = Cookies.get('tok');
  const response = await fetch(`${BASE_URL}/api/v1/user/me`, {
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  });
  return response.json();
};

export const setToken = (accessToken: string) => {
  const fifteenMinutes = 1 / 96;
  Cookies.set('tok', accessToken, { expires: fifteenMinutes });
};

export const removeToken = () => {
  Cookies.remove('tok');
  delete axiosInstance.defaults.headers.common['Authorization'];
};
