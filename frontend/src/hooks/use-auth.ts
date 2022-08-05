import { useContext } from 'react';
import { AuthContext } from '@auth/AuthProvider';

export const useAuth = () => {
  return useContext(AuthContext);
};
