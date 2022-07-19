import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect} from 'react';
import firebase from './src/firebaseConnection';
import Listagem from './src/Listagem'

export default function App() {
  const [dataForm, setDataForm] = useState({
    nome: "",
    email: "",
    password: ""
  })

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(dataForm.email, dataForm.password).then((value) => {
      // alert(value.user.uid)
      firebase.database().ref("usuarios").child(value.user.uid).set({
        nome: dataForm.nome,
      })

      alert("Usuario criado com sucesso!")
      setDataForm({
        nome: "",
        email: "",
        password: ""
      })
    }).catch((error) => {
      alert("Algo deu errado")
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.nome} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, nome: texto})}
      />

      <Text style={styles.texto}>Email:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.email} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, email: texto})}
      />
      
      <Text style={styles.texto}>Senha:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.password} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, password: texto})}
      />

      <Button title="Acessar" onPress={cadastrar} />
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
