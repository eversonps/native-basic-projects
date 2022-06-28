import React from 'react'
import Quadrado from './Quadrado'
import { StyleSheet, View } from 'react-native'

export default () => (
  <View style={style.FlexV3}>
    <Quadrado color="orange"/>
    <Quadrado color="blue" />
    <Quadrado color="red" />
    <Quadrado color="green" />
  </View>
)

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 350,
    backgroundColor: '#000'
  }
})