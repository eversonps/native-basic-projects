import React from 'react'
import { Text, FlatList } from 'react-native'
import estilo from '../estilo'

import produtos from './produtos'

export default () => {
  const renderProduto = ({ item: p }) => {
    return <Text key={p.id}>{p.id}- {p.nome} tem R$ {p.preco}</Text>
  }

  return (
    <>
      <Text style={estilo.fontG}>Lista de Produtos</Text>
      <FlatList data={produtos} keyExtractor={i => `${i.id}`} renderItem={renderProduto} />
    </>
  )
}