import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection'
;
export default function Login({ changeStatus }) {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: ""
  })

  const [type, setType] = useState("login")

  function handleLogin(){
    if(type === "login"){
      const user = firebase.auth().signInWithEmailAndPassword(dataForm.email, dataForm.password).then((user) => {
        changeStatus(user.user.uid)
      }).catch((err) => {
        console.log(err)
        alert("Nao foi possivel fazer o login")
      })
    }else{
      const user = firebase.auth().createUserWithEmailAndPassword(dataForm.email, dataForm.password).then((user) => {
        changeStatus(user.user.uid)
      }).catch((err) => {
        console.log(err)
        alert("Nao foi possivel fazer o cadastro")
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        placeholder='Seu email'
        style={styles.input}
        value={dataForm.email}
        onChangeText={(texto) => setDataForm({...dataForm, email: texto})}
      />

      <TextInput 
        placeholder='********'
        style={styles.input}
        value={dataForm.password}
        onChangeText={(texto) => setDataForm({...dataForm, password: texto})}
      />

      <TouchableOpacity style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' }]} onPress={handleLogin}>
        <Text style={styles.loginText}>{type === "login" ? "Acessar" : "Cadastrar"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(type => type === "login" ? "cadastrar" : "login")}>
        <Text style={{textAlign: "center"}}>{type === "login" ? "Criar uma conta" : "Fazer Login"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "F2F6FC",
    marginHorizontal: 30
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 4,
    height: 45, 
    padding: 10,
    borderWidth: "#141414"
  },
  handleLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141414",
    height: 45,
    marginBottom: 10
  },
  loginText: {
    color: "#FFF",
    fontSize: 17
  }
});
