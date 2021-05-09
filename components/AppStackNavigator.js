import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ExchangeScreen from '../screens/Exchange';

export const AppStackNavigator = createStackNavigator(
  {
    ExchangeList: {
      screen: ExchangeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'ExchangeList',
  }
);
