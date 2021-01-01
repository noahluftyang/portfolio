import { BoxSkeleton } from 'components/mod';
import { StatusBar } from 'expo-status-bar';
import { useCachedResources, useColorScheme } from 'hooks/mod';
import React, { Suspense } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { Navigation } from './src/Navigation';

const ChattingApp = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <PaperProvider>
          <Suspense fallback={<BoxSkeleton />}>
            <Navigation colorScheme={colorScheme} />
          </Suspense>
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default ChattingApp;
