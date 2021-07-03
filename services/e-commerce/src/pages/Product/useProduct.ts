import { storeApi } from 'apis/client';
import useSWR from 'swr';

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export function useProduct(productId: number) {
  return useSWR(['/products/:productId', productId], () => {
    return storeApi.get<Product>(`/products/${productId}`);
  });
}
