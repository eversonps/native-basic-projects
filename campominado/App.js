/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import params from './src/params';

import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

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

import { createMinedBoard, invertFlag, cloneBoard, openField, hadExplosion, wonGame, showMines, flagsUsed } from './src/functions';

export default function App() {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()

  const initialState = {
    board: createMinedBoard(rows, cols, minesAmount()),
    won: false, 
    lost: false,
    showLevelSelect: false
  }

  function minesAmount(){
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  const [state, setState] = useState(initialState)

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

    setState({board, lost, won, showLevelSelect: state.showLevelSelect})
  }

  function onSelectField(row, column) {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)

    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabens!', 'Voce venceu!')
    }

    setState({ ...state, board, won, showLevelSelect: state.showLevelSelect })
  }

  function onLevelSelected(level){
    params.difficultLevel = level
    setState(initialState)
  }

  return (
    <SafeAreaView style={styles.container}>
      <LevelSelection isVisible={state.showLevelSelect} onLevelSelected={onLevelSelected} onCancel={() => setState({...state, showLevelSelect: false})}  />
      <Header flagsLeft={minesAmount() - flagsUsed(state.board)} newGame={() => setState(initialState)} onFlagPress={() => setState({...state, showLevelSelect: true})}/>
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

