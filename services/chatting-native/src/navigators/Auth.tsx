import { createStackNavigator } from '@react-navigation/stack';
import { AuthRoute } from 'constants/Route';
import React from 'react';
import { LandingScreen } from 'screens/Auth/Landing';
import { SigninScreen } from 'screens/Auth/Signin';
import { SignupScreen } from 'screens/Auth/Signup';

const Stack = createStackNavigator<Record<AuthRoute, undefined>>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        component={LandingScreen}
        name={AuthRoute.Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen component={SigninScreen} name={AuthRoute.Signin} />
      <Stack.Screen component={SignupScreen} name={AuthRoute.Signup} />
    </Stack.Navigator>
  );
};
