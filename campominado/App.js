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
  Alert
} from 'react-native';

import Field from './src/components/Field';

import MineField from './src/components/MineField';

import { createMinedBoard, invertFlag, cloneBoard, openField, hadExplosion, wonGame, showMines } from './src/functions';

export default function App() {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()

  function minesAmount(){
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  const [state, setState] = useState({
    board: createMinedBoard(rows, cols, minesAmount()),
    won: false, 
    lost: false
  })

  function onOpenField(row, column) {
    const board = cloneBoard(state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeu!', 'Voce perdeu. Tente novamente :)')
    }

    if(won){
      Alert.alert('Parabens', 'Voce venceu!')
    }

    setState({board, lost, won})
  }

  function onSelectField(row, column) {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)

    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabens!', 'Voce venceu!')
    }

    setState({ ...state, board, won })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o mines</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      
      <View style={styles.board}>
        <MineField board={state.board} onOpenField={onOpenField} onSelectField={onSelectField}/>
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

