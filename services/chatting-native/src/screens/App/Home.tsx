import { useNavigation } from '@react-navigation/native';
import { AUTH_ROUTE } from 'constants/Route';
import React, { Suspense, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';
import { authApiClient as api } from 'utils/apiClient';

const AppContainer = () => {
  const { replace } = useNavigation();
  const { data } = useSWR('user', api.user, { suspense: true });

  useEffect(() => {
    if (data == null) {
      replace(AUTH_ROUTE.LANDING);
    }
  }, [data, replace]);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
};

export const AppHomeScreen = () => {
  return (
    <Suspense fallback={null}>
      <AppContainer />
    </Suspense>
  );
};
