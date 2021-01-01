import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { APP_ROUTE } from 'constants/Route';
import React from 'react';
import { AppChatScreen } from 'screens/App/Chat';
import { AppHomeScreen } from 'screens/App/Home';

const BottomTab = createBottomTabNavigator<Record<string, undefined>>();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={APP_ROUTE.HOME}>
      <BottomTab.Screen component={AppHomeScreen} name={APP_ROUTE.HOME} />
      <BottomTab.Screen component={AppChatScreen} name={APP_ROUTE.CHAT} />
    </BottomTab.Navigator>
  );
};
