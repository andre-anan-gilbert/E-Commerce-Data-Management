import { useMutation, useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from './axios';

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
  const { data, error, isError, isLoading, isIdle } = useQuery(
    'products',
    fetchProducts
  );

  return { data, error, isError, isLoading, isIdle };
};

const fetchProducts = async () => {
  const response = await axiosInstance.get<IProduct[]>(
    'api/v1/products/get-products'
  );
  return response.data;
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation(
    (newProduct: ICreateProduct) => {
      return createProduct(newProduct);
    },
    {
      onSuccess: (newProduct: IProduct) => {
        queryClient.setQueryData('products', (products: any) => [
          ...products,
          newProduct,
        ]);
      },
    }
  );

  return mutate;
};

const createProduct = async (newProduct: ICreateProduct) => {
  const response = await axiosInstance.post('api/v1/products/create', {
    ...newProduct,
  });
  return response.data;
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation(
    (updatedProduct: IProduct) => {
      return updateProduct(updatedProduct);
    },
    {
      onSuccess: (updatedProduct: IProduct) => {
        queryClient.setQueryData('products', (products: any) =>
          products.map((product: { id: number }) =>
            updatedProduct.id === product.id ? updatedProduct : product
          )
        );
      },
    }
  );

  return mutate;
};

const updateProduct = async (product: IProduct) => {
  const response = await axiosInstance.put(
    `api/v1/products/update/${product.id}`,
    { ...product }
  );
  return response.data;
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation(
    (id: number) => {
      return deleteProduct(id);
    },
    {
      onSuccess: (deletedProduct: IProduct) => {
        queryClient.setQueryData('products', (products: any) =>
          products.filter(
            (product: { id: number }) => deletedProduct.id !== product.id
          )
        );
      },
    }
  );

  return mutate;
};

const deleteProduct = async (id: number) => {
  const response = await axiosInstance.delete(`api/v1/products/delete/${id}`);
  return response.data;
};
