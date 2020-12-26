import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Fragment, useState } from 'react';
import { ColorSchemeName } from 'react-native';

import { SigninScreen } from '../screens/Signin';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const [isSignedIn] = useState(false);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <Fragment>
            <Stack.Screen component={BottomTabNavigator} name="Chatting" />
          </Fragment>
        ) : (
          <Fragment>
            <Stack.Screen component={SigninScreen} name="SignIn" />
            <Stack.Screen component={NotFoundScreen} name="NotFound" options={{ title: 'Oops!' }} />
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
