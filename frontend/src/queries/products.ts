/** The products queries. */
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
  const { data, error, isError, isLoading } = useQuery<IProduct[], Error>(
    'products',
    fetchProducts
  );

  return { data, error, isError, isLoading };
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
        const products = queryClient.getQueryData<IProduct[]>('products');
        if (products) {
          queryClient.setQueryData('products', [...products, newProduct]);
        }
      },
    }
  );

  return mutate;
};

const createProduct = async (newProduct: ICreateProduct) => {
  const response = await axiosInstance.post<IProduct>(
    'api/v1/products/create',
    {
      ...newProduct,
    }
  );
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
        const products = queryClient.getQueryData<IProduct[]>('products');
        if (products) {
          queryClient.setQueryData(
            'products',
            products.map((product: IProduct) =>
              updatedProduct.id === product.id ? updatedProduct : product
            )
          );
        }
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
        const products = queryClient.getQueryData<IProduct[]>('products');
        if (products) {
          queryClient.setQueryData(
            'products',
            products.filter(
              (product: IProduct) => deletedProduct.id !== product.id
            )
          );
        }
      },
    }
  );

  return mutate;
};

const deleteProduct = async (id: number) => {
  const response = await axiosInstance.delete<IProduct>(
    `api/v1/products/delete/${id}`
  );
  return response.data;
};
