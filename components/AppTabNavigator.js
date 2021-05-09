import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';
import ExchangeScreen from '../screens/Exchange';

export const AppTabNavigator = createBottomTabNavigator({
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/handshake.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Book Request',
    },
  },
});
