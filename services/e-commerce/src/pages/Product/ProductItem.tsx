import { Flex, Text, VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { pointer } from 'styles/cursor';
import { margin } from 'styles/margin';
import { Product } from './useProduct';

export const ProductItem = ({ id, image, price, title }: Product) => {
  return (
    <Link href={`/products/${id}`}>
      <Flex as="a" css={pointer} direction="column" justify="space-between">
        <img
          alt={title}
          css={[
            margin.y('auto'),
            css`
              max-height: 200px;
              max-width: 100%;
            `,
          ]}
          src={image}
        />
        <VStack align="flex-start" spacing={8}>
          <Text as="h3">{title}</Text>
          <Text as="p">{price}</Text>
        </VStack>
      </Flex>
    </Link>
  );
};
