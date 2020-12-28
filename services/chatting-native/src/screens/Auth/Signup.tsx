import { css } from '@emotion/native';
import * as api from '@portfolio/auth-api-client';
import { flex } from '@portfolio/styles';
import { FormInput } from 'components/mod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Fields {
  username: string;
  email: string;
  password: string;
}

export const SignupScreen = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<Fields>({
    defaultValues: { email: '', password: '', username: '' },
    mode: 'onChange',
  });

  return (
    <SafeAreaView
      style={[
        css(flex({ align: 'stretch', direction: 'column', justify: 'center' })),
        css`
          flex: 1;
          padding: 16px;
        `,
      ]}
    >
      <Title>회원가입</Title>
      <Text style={css(`margin-top: 24px`)}>닉네임을 적어주세요</Text>
      <FormInput.Text
        autoFocus
        control={control}
        name="username"
        rules={{ required: true }}
        style={css(`margin-top: 8px`)}
      />
      <Text style={css(`margin-top: 24px`)}>계정 정보</Text>
      <FormInput.Text
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
          const responseBody = await api.signup(fields);

          console.log(responseBody);
        })}
      >
        가입하기
      </Button>
    </SafeAreaView>
  );
};
