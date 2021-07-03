import { storeApi } from 'apis/client';
import useSWR from 'swr';
import { Product } from './useProduct';

export function useProducts() {
  return useSWR('/products', () => {
    return storeApi.get<Product[]>('/products');
  });
}
