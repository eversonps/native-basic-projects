import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Entrar from './components/Entrar';

export default function App() {

  const [visible, setVisible] = useState(false)

  const entrar = () => {
    setVisible(true)
  }

  const sair = () => {
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <Button title='Entrar' onPress={entrar} />

      <Modal animationType='slide' visible={visible} transparent={true}>
        <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Entrar sair={sair} />
        </View>
      </Modal>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});