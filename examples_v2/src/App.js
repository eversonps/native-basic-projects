import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("")
  const [text, setText] = useState("")

  const entrar = () => {
    if(nome.length > 0){
      setText(`Bem vindo ${nome}`)
    }else{
      setText('')
      alert('Digite seu nome!!!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{text}</Text>
      <TextInput style={styles.input} placeholder='Digite seu nome' underlineColorAndroid='transparent' onChangeText={(text) => setNome(text) }/>
      
      <Button onPress={entrar} title="Entrar"></Button>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#222'
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});


