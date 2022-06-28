import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("")

  const entrar = (nome) => {
    setName("Everson")
  }

  return (
    <View style={[styles.container, styles.area]}>
      <Text style={styles.textoPrincipal}>Texto 1</Text>
      <Text>Texto 2</Text>
      <Text>Texto 3</Text>
      <Text style={styles.textoPrincipal}>Texto 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  area: {
    backgroundColor: 'lightgray'
  },
  textoPrincipal: {
    fontSize: 25,
    color: 'red'
  }
});


