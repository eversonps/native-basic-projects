import React from 'react'
import { Button } from 'react-native'

export default ({min, max, funcao}) => {
  function randomNumber(){
    return Math.floor((Math.random() * (max - min)) + min)
  }

  return (
    <Button title='Gerar Número' onPress={() => funcao(randomNumber())}></Button>
  )
}