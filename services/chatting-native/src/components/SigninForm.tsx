import { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { FormInput } from 'components/mod';
import { APP_ROUTE } from 'constants/Route';
import { useUser } from 'hooks/useUser';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SigninFormFields } from 'types/Auth';

export const SigninForm = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<SigninFormFields>({ defaultValues: { email: '', password: '' }, mode: 'onChange' });
  const { replace } = useNavigation();
  const { signin } = useUser();

  return (
    <View style={css(`align-self: stretch`)}>
      <Text style={css(`margin-top: 24px`)}>계정 정보</Text>
      <FormInput.Text
        autoFocus
        control={control}
        name="email"
        placeholder="이메일"
        rules={{ required: true }}
        style={css(`margin-top: 8px`)}
      />
      <FormInput.Text
        control={control}
        name="password"
        placeholder="비밀번호"
        rules={{ required: true }}
        secureTextEntry
        style={css(`margin-top: 16px`)}
      />
      <Button
        disabled={isSubmitting || !isValid}
        loading={isSubmitting}
        mode="contained"
        style={css(`margin-top: 16px`)}
        onPress={handleSubmit(async fields => {
          const { status } = await signin(fields);

          if (status === 'SUCCESS') {
            replace(APP_ROUTE.HOME);
          }
        })}
      >
        로그인
      </Button>
    </View>
  );
};
