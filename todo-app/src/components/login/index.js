import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: ""
  })

  function handleLogin(){
    alert("TESTE")
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

      <TouchableOpacity style={styles.handleLogin} onPress={handleLogin}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{textAlign: "center"}}>Criar uma conta</Text>
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
