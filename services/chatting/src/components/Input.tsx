import { TextField } from '@material-ui/core';
import { Stack } from '@portfolio/components';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<typeof TextField> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  if (label != null) {
    return (
      <Stack.Vertical align="stretch" as="label" space={8}>
        {label}
        <TextField ref={ref} {...props} />
      </Stack.Vertical>
    );
  }

  return <TextField ref={ref} {...props} />;
});
