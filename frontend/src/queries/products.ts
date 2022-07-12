import { useQuery } from 'react-query';
import { axiosInstance } from './axios';

export interface IProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
  supplier_id: number;
}

export const useProducts = () => {
  const { data, error, isError, isLoading, isIdle } = useQuery(
    'products',
    fetchProducts
  );

  return { data, error, isError, isLoading, isIdle };
};

const fetchProducts = async () => {
  const response = await axiosInstance.get('api/v1/products/get-products');
  return response.data;
};
