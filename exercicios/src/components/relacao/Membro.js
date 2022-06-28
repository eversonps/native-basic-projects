import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default ({nome, sobrenome}) => (
  <Text style={estilo.fontG}>{nome} {sobrenome}</Text>
)