/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Animated, View, ScrollView, Text} from 'react-native';
import {HeaderStyleInterpolators} from '@react-navigation/stack';

import {createStackNavigator} from '@react-navigation/stack';

import Page from './src/components/Page';
import TestPage from './src/components/TestPage';

import {NavigationContainer} from '@react-navigation/native';

declare const global: {HermesInternal: null | {}};

const AppNav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppNav.Navigator
        initialRouteName="Page"
        headerMode="screen"
        screenOptions={{
          headerStyle: {
            elevation: 0,
            height: 60,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
          },
        }}>
        <AppNav.Screen
          name="Page"
          component={Page}
          options={{
            title: 'Profile',
          }}
        />
        <AppNav.Screen
          name="TestPage"
          component={TestPage}
          options={{
            title: 'TestPage',
            headerTitleContainerStyle: {
              opacity: 0,
              
            },
            headerRightContainerStyle: {
              opacity: 0,
            },
          }}
        />
                <AppNav.Screen
          name="Page1"
          component={Page}
          options={{
            title: 'Profile',
          }}
        />
      </AppNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
