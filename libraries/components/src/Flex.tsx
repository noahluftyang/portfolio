import { css } from '@emotion/react';
import { flex, FlexOption } from '@portfolio/styles';
import React from 'react';

interface FlexProps extends FlexOption {
  as?: any;
}

export const Flex = ({
  align = 'flex-start',
  as: Component = 'div',
  direction = 'row',
  justify = 'flex-start',
  ...props
}: FlexProps) => {
  return <Component css={css(flex({ align, direction, justify }))} {...props} />;
};

interface FlexCenterProps extends Omit<FlexProps, 'align' | 'justify'> {}

Flex.Center = (props: FlexCenterProps) => {
  return <Flex align="center" justify="center" {...props} />;
};
