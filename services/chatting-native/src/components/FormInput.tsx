import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

interface FormTextInputProps
  extends ComponentPropsWithoutRef<typeof Controller>,
    ComponentPropsWithoutRef<typeof TextInput> {}

const FormTextInput = forwardRef<any, FormTextInputProps>(
  ({ control, name, rules, ...inputProps }, ref) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ onChange, ...props }) => {
          return <TextInput ref={ref} onChangeText={onChange} {...inputProps} {...props} />;
        }}
        rules={rules}
      />
    );
  }
);

export const FormInput = {
  Text: FormTextInput,
};
