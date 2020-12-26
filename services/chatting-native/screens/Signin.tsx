import { css } from '@emotion/native';
import { flex } from '@portfolio/styles';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, Subheading, Text, TextInput, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <Controller
          control={control}
          name="password"
          render={props => (
            <TextInput autoFocus placeholder="이메일" style={css(`margin-top: 8px`)} {...props} />
          )}
          rules={{ required: true }}
        />
        <Controller
          control={control}
          name="password"
          render={props => (
            <TextInput
              placeholder="비밀번호"
              secureTextEntry
              style={css(`margin-top: 16px`)}
              {...props}
            />
          )}
          rules={{ required: true }}
        />
        <Button
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
          mode="contained"
          style={css(`margin-top: 16px`)}
          onPress={handleSubmit(fields => {
            try {
              console.log(fields);
            } catch (error) {
              console.error(error);
            }
          })}
        >
          로그인
        </Button>
      </View>
    </SafeAreaView>
  );
};
