import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './navigation/AppStack';
import {HomeScreen} from './features/home/HomeScreen';
import {MainStack} from './navigation/MainStack';
import {TabNavigator} from './navigation/TabNavigator';

export default () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
