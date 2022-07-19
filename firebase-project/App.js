import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect} from 'react';
import firebase from './src/firebaseConnection';
import Listagem from './src/Listagem'

export default function App() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: ""
  })

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(dataForm.email, dataForm.password).then((value) => {
      alert("Usuario criado: " + value.user.email)
    }).catch((error) => {
      if(error.code === "auth/weak-password"){
        alert("Sua senha deve ter pelo menos 6 caracteres")
        return
      }

      if(error.code === "auth/invalid-email"){
        alert("Email invalido")
        return
      }

      alert("Ops, algo deu errado!")
      setDataForm({
        email: "",
        password: ""
      })
    })
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

      <Button title="Novo Funcionario" onPress={cadastrar} />
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
