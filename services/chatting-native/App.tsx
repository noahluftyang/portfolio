import { StatusBar } from 'expo-status-bar';
import { useCachedResources, useColorScheme } from 'hooks/mod';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from './src/Navigation';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
