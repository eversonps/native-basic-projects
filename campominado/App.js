/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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

import MineField from './src/components/MineField';

import { createMinedBoard } from './src/functions';

export default function App() {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()

  function minesAmount(){
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  const [board, setBoard] = useState(createMinedBoard(rows, cols, minesAmount()))

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o mines</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      
      <View style={styles.board}>
        <MineField board={board}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

