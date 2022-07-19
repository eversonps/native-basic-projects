/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default App;
