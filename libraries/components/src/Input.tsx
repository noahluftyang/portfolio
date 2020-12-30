import { useId } from '@reach/auto-id';
import React, { forwardRef, InputHTMLAttributes } from 'react';

import { Stack } from './Stack';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ id, label, ...props }, ref) => {
  const uuid = useId(id);

  if (label != null) {
    return (
      <Stack.Vertical align="stretch" space={8}>
        <label htmlFor={uuid}>{label}</label>
        <input id={uuid} ref={ref} {...props} />
      </Stack.Vertical>
    );
  }

  return <input id={uuid} ref={ref} {...props} />;
});
