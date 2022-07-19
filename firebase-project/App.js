import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect} from 'react';
import firebase from './src/firebaseConnection';
import Listagem from './src/Listagem'

export default function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataForm, setDataForm] = useState({
    nome: "",
    cargo: ""
  })

  useEffect(async () => {
    await firebase.database().ref("usuarios").on("value", (snapshot) => {
      setUser([])
      snapshot.forEach((childItem) => {
        let data = {
          key: childItem.key,
          nome: childItem.val().nome,
          cargo: childItem.val().cargo
        }

        setUser(oldArray => [...oldArray, data].reverse())
        setLoading(false)
      })
    })
  }, [])

  async function cadastrar(){
    if(dataForm.nome !== '' && dataForm.cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios')
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: dataForm.nome,
        cargo: dataForm.cargo
      })

      alert("Cadastrado com sucesso")
      setDataForm({
        nome: "",
        cargo: ""
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.nome} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, nome: texto})}
      />
      
      <Text style={styles.texto}>Cargo:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={dataForm.cargo} style={styles.input} 
       onChangeText={(texto) => setDataForm({...dataForm, cargo: texto})}
      />

      <Button title="Novo Funcionario" onPress={cadastrar} />

      {
        loading ? 
        ( 
          <ActivityIndicator color="#121212" size={45} />
        ) : 
        (
          <FlatList keyExtractor={item => item.key} data={user} renderItem={ ({item}) => <Listagem data={item} />}/>
        )
      }
      
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
