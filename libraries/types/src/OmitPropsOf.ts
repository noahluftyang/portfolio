import { ComponentProps, JSXElementConstructor } from 'react';

export type OmitPropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  P extends keyof ComponentProps<C>
> = Omit<ComponentProps<C>, P>;
