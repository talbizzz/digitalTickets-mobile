import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './navigation/AppStack';
import {HomeScreen} from './features/home/HomeScreen';
import {MainStack} from './navigation/MainStack';
import {TabNavigator} from './navigation/TabNavigator';
import {Provider} from 'react-redux';
import store from './store/store';

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
