import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './screens/StartScreen/index';
import CategoryScreen from './screens/CategoryScreen';
import {Discovery, Genre} from './types/database';
import DetailScreen from './screens/DetailScreen';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

export type MainStackParamList = {
  Home: undefined;
  Category: {genre: Genre};
  Detail: {item: Discovery};
};

const MainStackNavigator = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name="Home" component={StartScreen} />
    <MainStack.Screen name="Category" component={CategoryScreen} />
    <MainStack.Screen name="Detail" component={DetailScreen} />
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
