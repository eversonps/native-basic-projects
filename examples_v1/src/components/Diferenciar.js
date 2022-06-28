import React from 'react'
import { Text, Platform } from 'react-native'
import estilo from './estilo'

export default () => {
  if(Platform.OS === "android"){
    return <Text style={estilo.fontG}></Text>
  }else if(Platform.OS === "ios"){
    return <Text style={estilo.fontG}>iOS</Text>
  }else{
    return <Text style={estilo.fontG}>{Platform.OS}</Text>
  }
}