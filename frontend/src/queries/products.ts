/** The products queries. */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxiosClient } from './axios';

export interface ICreateProduct {
  name: string;
  description: string;
  price: number;
  category_id: number;
  supplier_id: number;
}

export interface IProduct extends ICreateProduct {
  id: number;
}

export const useFetchProducts = () => {
  const axiosClient = useAxiosClient();
  const { data, error, isError, isLoading } = useQuery<IProduct[], Error>(
    ['products'],
    async () =>
      await axiosClient
        .get<IProduct[]>('api/v1/products/get-products')
        .then((response) => response.data)
  );

  return { data, error, isError, isLoading };
};

export const useCreateProduct = () => {
  const axiosClient = useAxiosClient();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (newProduct: ICreateProduct) => {
      return await axiosClient
        .post<IProduct>('api/v1/products/create', {
          ...newProduct,
        })
        .then((response) => response.data);
    },
    {
      onSuccess: (newProduct: IProduct) => {
        const products = queryClient.getQueryData<IProduct[]>(['products']);
        if (products) {
          queryClient.setQueryData(['products'], [...products, newProduct]);
        }
      },
    }
  );

  return mutation;
};

export const useUpdateProduct = () => {
  const axiosClient = useAxiosClient();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (updatedProduct: IProduct) => {
      return await axiosClient
        .put<IProduct>(`api/v1/products/update/${updatedProduct.id}`, {
          ...updatedProduct,
        })
        .then((response) => response.data);
    },
    {
      onSuccess: (updatedProduct: IProduct) => {
        const products = queryClient.getQueryData<IProduct[]>(['products']);
        if (products) {
          queryClient.setQueryData(
            ['products'],
            products.map((product: IProduct) =>
              updatedProduct.id === product.id ? updatedProduct : product
            )
          );
        }
      },
    }
  );

  return mutation;
};

export const useDeleteProduct = () => {
  const axiosClient = useAxiosClient();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (id: number) => {
      return await axiosClient
        .delete<IProduct>(`api/v1/products/delete/${id}`)
        .then((response) => response.data);
    },
    {
      onSuccess: (deletedProduct: IProduct) => {
        const products = queryClient.getQueryData<IProduct[]>(['products']);
        if (products) {
          queryClient.setQueryData(
            ['products'],
            products.filter(
              (product: IProduct) => deletedProduct.id !== product.id
            )
          );
        }
      },
    }
  );

  return mutation;
};
