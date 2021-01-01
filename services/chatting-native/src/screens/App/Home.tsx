import { useUser } from 'hooks/useUser';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AppHomeScreen = () => {
  const { data } = useUser();

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
};
