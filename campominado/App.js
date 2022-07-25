/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import params from './src/params';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Field from './src/components/Field';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o mines</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={4} />
      <Field opened nearMines={7} />
      <Field mined />
      <Field mined opened/>
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});

