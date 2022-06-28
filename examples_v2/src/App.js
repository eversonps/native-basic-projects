import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("")

  const entrar = (nome) => {
    setName("Everson")
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title='Entrar' onPress={() => entrar("Everson")}/>
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
});


