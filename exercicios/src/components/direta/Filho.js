import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default ({x, y}) => (
  <>
    <Text style={estilo.fontG}>{x}</Text>
    <Text style={estilo.fontG}>{y}</Text>
  </>
)