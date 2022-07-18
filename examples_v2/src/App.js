import { useEffect, useMemo, useState, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator, Animated } from 'react-native';

import api from "./services/api"

export default function App() {
  const [cep, setCep] = useState("")
  const [addressUser, setAddressUser] = useState(null)

  const inputRef = useRef()

  function limpar(){
    setCep("")
    setAddressUser("")
    inputRef.current.focus()
  }

  async function buscar(){
    if(cep == ""){
      alert("Digite um cep valido")
      setCep("")
      return
    }

    try {
      const response = await api.get(cep + "/json")
      setAddressUser(response.data)
      Keyboard.dismiss
    } catch(error){
      console.log("erro: " + error)
    }
    

  }

  return (
    <SafeAreaView style={styles.container}> 
      <View style={{alignItems: "center"}}>
        <Text style={styles.text}>Insira o cep desejado:</Text>
        <TextInput ref={inputRef} style={styles.input} value={cep} onChangeText={(text) => setCep(text)} placeholder="Ex: 000000" keyboardType='numeric'/>
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: "#1d75cd"}]} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: "#cd3e1d"}]} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {addressUser && 
        <View style={styles.resultado}>
          <Text style={styles.textItem}>Cep: {addressUser.cep}</Text>
          <Text style={styles.textItem}>Sigla: {addressUser.uf}</Text>
          <Text style={styles.textItem}>Cidade: {addressUser.localidade}</Text>
          <Text style={styles.textItem}>Bairro: {addressUser.bairro}</Text>
          <Text style={styles.textItem}>Logradouro: {addressUser.logradouro}</Text>
        </View>
      }
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 15,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "80%",
    padding: 10
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center"
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginRight: 5,
    borderRadius: 5
  },
  botaoText: {
    fontSize: 22,
    color: "white"
  },
  textItem: {
    fontSize: 22
  },
  resultado: {
    marginTop: 15,
    flex: 1,
    textAlign: "center",
    alignItems: "center"
  }
});