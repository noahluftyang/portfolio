import { css } from '@emotion/native';
import { flex } from '@portfolio/styles';
import { SigninForm } from 'components/mod';
import React from 'react';
import { Subheading, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SigninScreen = () => {
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
      <Title>환영합니다!</Title>
      <Subheading>로그인하세요.</Subheading>
      <SigninForm />
    </SafeAreaView>
  );
};
