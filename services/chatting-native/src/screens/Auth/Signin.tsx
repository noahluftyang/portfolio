import { css } from '@emotion/native';
import { flex } from '@portfolio/styles';
import { FormInput } from 'components/mod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, Subheading, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as api from 'requests/signin';

interface Fields {
  email: string;
  password: string;
}

export const SigninScreen = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<Fields>({ defaultValues: { email: '', password: '' }, mode: 'onChange' });

  return (
    <SafeAreaView
      style={[
        css(flex({ align: 'center', direction: 'column', justify: 'center' })),
        css`
          flex: 1;
          padding: 16px;
        `,
      ]}
    >
      <View style={css(`width: 100%`)}>
        <Title>환영합니다!</Title>
        <Subheading>로그인하세요.</Subheading>
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
            const responseBody = await api.signin(fields);

            console.log(responseBody);
          })}
        >
          로그인
        </Button>
      </View>
    </SafeAreaView>
  );
};