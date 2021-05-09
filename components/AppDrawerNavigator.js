import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import customSideBarMenu from './customSidebarMenu';
import ExchangeScreen from '../screens/Exchange';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Exchange: {
      screen: ExchangeScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    contentComponent: customSidebarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
