import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect} from 'react';
import firebase from './src/firebaseConnection';
import Listagem from './src/Listagem'

export default function App() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: ""
  })

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(dataForm.email, dataForm.password).then((value) => {
      alert("Bem vindo: " + value.user.email)
    }).catch((error) => {
      alert("Ops, algo deu errado!")
    })
  }

  async function logout(){
    await firebase.auth().signOut()
    
    alert("Deslogado com sucesso!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.nome} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, email: texto})}
      />
      
      <Text style={styles.texto}>Senha:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.cargo} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, password: texto})}
      />

      <Button title="Acessar" onPress={logar} />
      <Button title="Deslogar" onPress={logout} />
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
  texto:{
    fontSize: 25
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212"
  }
});
