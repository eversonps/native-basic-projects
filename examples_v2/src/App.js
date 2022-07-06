import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator, Animated } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Everson')

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => setNome('Everson (alterado)')}>
        <Text style={styles.btnText}>Altera nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>Olá {nome}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: '#000',
    fontSize: 40,
    textAlign: 'center'
  },
  btn: {
    backgroundColor: '#222',
    padding: 5
  },
  btnText: {
    fontSize: 15,
    color: '#FFF'
  }
});