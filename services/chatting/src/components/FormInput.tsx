import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Controller } from 'react-hook-form';

import { Input } from './Input';

interface FormTextInputProps
  extends ComponentPropsWithoutRef<typeof Controller>,
    ComponentPropsWithoutRef<typeof Input> {}

const FormTextInput = forwardRef<any, FormTextInputProps>(
  ({ control, name, rules, ...inputProps }, ref) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ onChange, ...props }) => {
          return <Input ref={ref} onChange={onChange} {...inputProps} {...props} />;
        }}
        rules={rules}
      />
    );
  }
);

export const FormInput = {
  Text: FormTextInput,
};
