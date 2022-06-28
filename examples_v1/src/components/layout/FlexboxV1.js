import React from 'react'
import Quadrado from './Quadrado'
import { StyleSheet, View } from 'react-native'

export default () => (
  <View style={style.FlexV1}>
    <Quadrado color="orange"/>
    <Quadrado color="blue" />
    <Quadrado color="red" />
    <Quadrado color="green" />
  </View>
)

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000'
  }
})