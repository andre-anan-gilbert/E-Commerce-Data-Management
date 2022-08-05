/** The user queries. */
import { axiosInstance, useAxiosClient } from './axios';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@hooks/use-auth';

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

export const useRefreshToken = () => {
  const auth = useAuth();

  const fetchRefreshToken = async () => {
    const response = await axiosInstance
      .post<IToken>('api/v1/user/refresh-token')
      .then((response) => response.data);

    auth?.setToken(response.access_token);
    return response.access_token;
  };

  return fetchRefreshToken;
};

export const useFetchUser = () => {
  const axiosClient = useAxiosClient();
  const { data, error, isError, isLoading } = useQuery<IUser, Error>(
    ['user'],
    async () =>
      await axiosClient
        .get<IUser>('api/v1/user/me')
        .then((response) => response.data)
  );

  return { data, error, isError, isLoading };
};
