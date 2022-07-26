/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'; 

import TextoCentral from '../components/TextoCentral';

import TelaA from './TelaA';
import TelaB from './TelaB';
import TelaC from './TelaC';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
