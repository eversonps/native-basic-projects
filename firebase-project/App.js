import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect} from 'react';
import {  } from 'react';
import firebase from './src/firebaseConnection';

export default function App() {
  const [user, setUser] = useState({
    nome: "Carregando",
    idade: "Carregando"
  })

  useEffect(async () => {
    await firebase.database().ref("usuarios/1").on("value", (snapshot) => {
      setUser({
        ...user,
        nome: snapshot.val().nome,
        idade: snapshot.val().idade
      })
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Ola {user.nome}!</Text>
      <Text style={{fontSize: 25}}>Ola {user.idade}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
});
