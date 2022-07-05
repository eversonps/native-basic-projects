import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator } from 'react-native';

import api from './services/api'

import Conversor from './components/Conversor'
import Filmes from './components/Filmes';


export default function App() {
  return (
    <View style={styles.container}>
      <Conversor moedaA='USD' moedaB='BRL'/>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});