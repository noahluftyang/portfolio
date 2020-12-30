import { createStackNavigator } from '@react-navigation/stack';
import { AUTH_ROUTE } from 'constants/Route';
import React from 'react';
import { AuthLandingScreen } from 'screens/Auth/Landing';
import { SigninScreen } from 'screens/Auth/Signin';
import { SignupScreen } from 'screens/Auth/Signup';

const Stack = createStackNavigator<Record<string, undefined>>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        component={AuthLandingScreen}
        name={AUTH_ROUTE.LANDING}
        options={{ headerShown: false }}
      />
      <Stack.Screen component={SigninScreen} name={AUTH_ROUTE.SIGNIN} />
      <Stack.Screen component={SignupScreen} name={AUTH_ROUTE.SIGNUP} />
    </Stack.Navigator>
  );
};
