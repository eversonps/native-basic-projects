import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Image, TouchableOpacity, FlatList, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [nome, setNome] = useState('Everson')
  const [input, setInput] = useState('')

  function gravaNome(){
    setNome(input)
    alert('salvo com sucesso!')
    Keyboard.dismiss()
  }

  useEffect(async () => {
    await AsyncStorage.setItem('nome', nome)
  }, [nome])

  useEffect(async () => {
    await AsyncStorage.getItem('nome').then((value) => {
      setNome(value)
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setInput(text)}
        />

        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInput: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40, 
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
});