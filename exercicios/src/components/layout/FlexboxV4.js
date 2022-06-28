import React from 'react'
import { StyleSheet, View } from 'react-native'

export default () => (
  <View style={style.FlexV4}>
    <View style={style.v1} />
    <View style={style.v2} />
  </View>
)

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000'
  },
  v1: {
    flexGrow: 1,
    backgroundColor: '#ff801a'
  },
  v2: {
    flexGrow: 3,
    backgroundColor: '#dd22c1'
  }
})