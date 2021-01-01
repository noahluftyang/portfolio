import { css } from '@emotion/native';
import { SignupForm } from 'components/mod';
import React from 'react';
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignupScreen = () => {
  return (
    <SafeAreaView
      style={[
        css`
          flex: 1;
          padding: 16px;
        `,
      ]}
    >
      <Title>회원가입</Title>
      <SignupForm />
    </SafeAreaView>
  );
};
