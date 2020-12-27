import { css } from '@emotion/native';
import { flex } from '@portfolio/styles';
import { AuthRoute } from 'constants/Route';
import React from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[
        css(flex({ align: 'stretch', direction: 'column', justify: 'flex-end' })),
        css`
          flex: 1;
          padding: 16px;
        `,
      ]}
    >
      <View>
        <Title style={css(`text-align: center`)}>환영합니다</Title>
        <Button mode="contained" onPress={() => navigation.navigate(AuthRoute.Signup)}>
          회원가입
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate(AuthRoute.Signin)}>
          로그인
        </Button>
      </View>
    </SafeAreaView>
  );
};