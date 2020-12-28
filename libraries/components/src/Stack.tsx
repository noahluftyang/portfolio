import { css } from '@emotion/react';
import { gutter, GutterOption } from '@portfolio/styles';
import { OmitPropsOf } from '@portfolio/types';
import React from 'react';

import { Flex } from './Flex';

interface StackProps extends OmitPropsOf<typeof Flex, 'direction'>, GutterOption {}

export const Stack = ({
  direction = 'vertical',
  selector = '*',
  space = 16,
  ...props
}: StackProps) => {
  return (
    <Flex
      css={css(gutter({ direction, space, selector }))}
      direction={direction === 'vertical' ? 'column' : 'row'}
      {...props}
    />
  );
};

interface StackWithDirectionProps extends Omit<StackProps, 'direction'> {}

Stack.Vertical = (props: StackWithDirectionProps) => {
  return <Stack direction="vertical" {...props} />;
};
