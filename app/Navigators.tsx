import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './screens/StartScreen/index';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={StartScreen} />
  </MainStack.Navigator>
);

const Navigation = () => (
  <RootStack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}
  >
    <RootStack.Screen name="Main" component={MainStackNavigator} />
  </RootStack.Navigator>
);

export default Navigation;
