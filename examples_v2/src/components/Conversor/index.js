import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet } from "react-native";

import api from "../../services/api";
// https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

export default function Conversor({moedaA, moedaB}){
  const [data, setData] = useState({
    moedaA: moedaA,
    moedaB: moedaB,
    moedaB_valor: 0,
    valorConvertido: 0
  })

  async function converter(){
    let de_para = data.moedaA + '_' + data.moedaB
    const response = await api.get('convert?q=' + de_para + '&compact=ultra&apiKey=7c5ef455b88d735bc6ad')
    let cotacao = response.data[de_para]

    let resultado = (cotacao * parseFloat(data.moedaB_valor))
    setData({...data, valorConvertido: resultado.toFixed(2) })

    Keyboard.dismiss()
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
      <TextInput keyboardType="numeric" placeholder='Valor a ser convertido' style={styles.areaInput} onChangeText={({moedaB_valor}) => [setData({...data, moedaB_valor})]}/>
      
      <TouchableOpacity style={styles.botaoArea} onPress={converter}>
        <Text style={styles.botaoTexto}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.valorConvertido}>{data.valorConvertido === 0 ? '' : data.valorConvertido}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5
  },
  botaoArea: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF'
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15
  }
});