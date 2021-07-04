import { Grid, Skeleton } from '@chakra-ui/react';
import { Suspense } from 'react';
import { ProductItem } from './ProductItem';
import { useProducts } from './useProducts';

export const ProductList = () => {
  return (
    <Suspense fallback={<Pending />}>
      <Resolved />
    </Suspense>
  );
};

const Resolved = () => {
  const { data } = useProducts();

  if (data == null) {
    throw new Error('상품 목록을 불러올 수 없습니다.');
  }

  return (
    <Grid gap={16} templateColumns="repeat(4, 1fr)">
      {data.map(product => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </Grid>
  );
};

const Pending = () => {
  return (
    <Grid>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Grid>
  );
};
