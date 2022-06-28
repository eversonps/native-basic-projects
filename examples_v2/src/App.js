import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("")

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Digite seu nome' underlineColorAndroid='transparent' onChangeText={(text) => setNome(text) }/>
    <Text style={styles.texto}>{nome.length > 0 && `Bem vindo ${nome}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    width: '80%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#222'
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});


