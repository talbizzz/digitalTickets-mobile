import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './navigation/AppStack';
import {Provider} from 'react-redux';
import store from './store/store';
import {IconSVG} from './core/components/IconSVG';

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
