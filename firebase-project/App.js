import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState, useEffect} from 'react';
import firebase from './src/firebaseConnection';

export default function App() {
  const [user, setUser] = useState({
    nome: "",
    cargo: ""
  })

  useEffect(async () => {
    // await firebase.database().ref("tipo").set("Vendedor")
    // await firebase.database().ref("tipo").remove()

    /* await firebase.database().ref("usuarios").child(3).set({
      nome: "Carla",
      cargo: "programador"
    }) */

    await firebase.database().ref("usuarios").child(3).update({
      nome: "Pedro",
    })
  }, [])

  async function cadastrar(){
    if(user.nome !== '' && user.cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios')
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: user.nome,
        usuario: user.cargo
      })

      alert("Cadastrado com sucesso")
      setUser({nome: "", cargo: ""})
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={user.nome} style={styles.input} 
       onChangeText={(texto) => setUser({...user, nome: texto})}
      />
      
      <Text style={styles.texto}>Cargo:</Text>
      <TextInput underlineColorAndroid={"transparent"}
       value={user.cargo} style={styles.input} 
       onChangeText={(texto) => setUser({...user, cargo: texto})}
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
