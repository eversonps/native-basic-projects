import React from 'react'
import { Text, View } from 'react-native'
import estilo from './estilo'

export default ({ num }) => {
    return (
      <View>
        <Text>O resultado é: </Text>
        <Text style={estilo.fontG}>{num % 2 == 0 ? "Par" : "Impar"}</Text>
      </View>
    )
}