import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'
import If from './If'

export default ({ usuario = {} }) => (
  <>
    <If teste={usuario && usuario.nome && usuario.email}>
      <Text style={estilo.fontG}>Usuario logado:</Text>
      <Text style={estilo.fontG}>{usuario.nome} - {usuario.email}</Text>
    </If>
  </>
)