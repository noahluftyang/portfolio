import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import { useUser } from 'hooks/useUser';
import React from 'react';
import { ColorSchemeName } from 'react-native';

import { AppNavigator, AuthNavigator } from './navigators/mod';
import NotFoundScreen from './screens/NotFoundScreen';
import { RootStackParamList } from './types';

const LinkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

const Stack = createStackNavigator<RootStackParamList>();

interface Props {
  colorScheme: ColorSchemeName;
}

export const Navigation = ({ colorScheme }: Props) => {
  const { isSignedin } = useUser();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedin ? (
          <Stack.Screen component={AppNavigator} name="Chatting" />
        ) : (
          <Stack.Screen component={AuthNavigator} name="Auth" />
        )}
        <Stack.Screen component={NotFoundScreen} name="NotFound" options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
