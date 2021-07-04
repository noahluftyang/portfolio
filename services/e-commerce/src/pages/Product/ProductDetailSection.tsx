import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useRouter } from 'hooks/useRouter';
import { Suspense } from 'react';
import { margin } from 'styles/margin';
import { formatDollar } from 'utils/currency';
import { useProduct } from './useProduct';

export const ProductDetailSection = () => {
  return (
    <Suspense fallback={<Pending />}>
      <Resolved />
    </Suspense>
  );
};

const Resolved = () => {
  const { query } = useRouter();

  if (typeof query.productId !== 'string') {
    throw new Error('잘못된 상품입니다.');
  }

  const { data } = useProduct(Number(query.productId));

  if (data == null) {
    throw new Error('상품을 불러오던 중 오류가 발생했습니다.');
  }

  return (
    <section>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Grid
        as="section"
        css={margin.top(16)}
        gap="16px"
        templateColumns="repeat(2, 1fr)"
        templateRows="5fr 1fr"
      >
        <GridItem align="center" as={Flex} css={css(`height: 560px`)} justify="center" rowSpan={2}>
          <img
            alt={data.title}
            css={css`
              max-height: 100%;
              max-width: 100%;
            `}
            src={data.image}
          />
        </GridItem>
        <VStack align="stretch" spacing="8px">
          <Text>판매가</Text>
          <Text color="red.500" fontSize="2xl" fontWeight="bold">
            {formatDollar(data.price)}
          </Text>
          <Divider />
          <Text>{data.description}</Text>
        </VStack>
        <VStack align="stretch" spacing="8px">
          <Divider />
          <ButtonGroup colorScheme="blackAlpha" spacing="8px">
            <Button variant="solid">바로구매</Button>
            <Button variant="outline">장바구니에 담기</Button>
          </ButtonGroup>
        </VStack>
      </Grid>
    </section>
  );
};

const Pending = () => {
  return (
    <section>
      <Text as="h2" fontSize="2xl">
        상품을 불러오고 있습니다.
      </Text>
      <Grid
        as="section"
        css={margin.top(16)}
        gap="16px"
        templateColumns="repeat(2, 1fr)"
        templateRows="5fr 1fr"
      >
        <GridItem as={Skeleton} css={css(`height: 560px`)} rowSpan={2} />
        <VStack align="stretch" spacing="8px">
          <Text>판매가</Text>
          <SkeletonText fontSize="2xl" noOfLines={1} />
          <Divider />
          <SkeletonText />
        </VStack>
        <VStack align="stretch" spacing="8px">
          <Divider />
          <ButtonGroup colorScheme="blackAlpha" spacing="8px">
            <Button isLoading loadingText="바로구매" variant="solid">
              바로구매
            </Button>
            <Button disabled variant="outline">
              장바구니에 담기
            </Button>
          </ButtonGroup>
        </VStack>
      </Grid>
    </section>
  );
};
