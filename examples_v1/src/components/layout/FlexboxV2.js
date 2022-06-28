import React from 'react'
import Quadrado from './Quadrado'
import { StyleSheet, View } from 'react-native'

export default () => (
  <View style={style.FlexV2}>
    <Quadrado color="orange"/>
    <Quadrado color="blue" />
    <Quadrado color="red" />
    <Quadrado color="green" />
  </View>
)

const style = StyleSheet.create({
  FlexV2: {
    width: '100%',
    alignItems: 'flex-end',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#000'
  }
})