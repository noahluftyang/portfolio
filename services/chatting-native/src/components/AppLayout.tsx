import { css } from '@emotion/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AppLayout = ({ children }) => {
  return (
    <SafeAreaView
      style={css`
        padding: 16px;
      `}
    >
      {children}
    </SafeAreaView>
  );
};
