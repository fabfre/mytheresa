import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
// @ts-ignore
import {PersistGate} from 'redux-persist/es/integration/react';
import Navigator from './Navigators';
import {configureStore} from './logic/configureStore';

const navigationRef = React.createRef<NavigationContainerRef>();
const {persistor, store} = configureStore();

const Main = (): JSX.Element => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  </PersistGate>
);

export default Main;
