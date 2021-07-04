import { Text } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { ProductList } from './Product/ProductList';

export const ProductsPage = () => {
  return (
    <Layout>
      <Text>landing</Text>
      <ProductList />
    </Layout>
  );
};
