import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import estilo from './estilo'

export default () => {
  const [nome, setNome] = useState("")

  return (
    <View>
      <Text style={estilo.fontG}></Text>
      <TextInput placeholder='Digite seu nome' value={nome} onChangeText={nome => setNome(nome)}/>
    </View>
  )
}