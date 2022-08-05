import React, { useState, ReactNode } from 'react';
import { axiosInstance } from '@queries/axios';

export interface AuthContextInstance {
  accessToken: string;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const AuthContext = React.createContext<AuthContextInstance | null>(
  null
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('');

  const setToken = (token: string) => setAccessToken(token);

  const removeToken = () => {
    setAccessToken('');
    delete axiosInstance.defaults.headers.common['Authorization'];
  };

  const value = { accessToken, setToken, removeToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
