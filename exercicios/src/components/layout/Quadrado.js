import React from 'react'
import { StyleSheet, View } from 'react-native'

export default ({color}) => (
  <View style={{
    height: 50,
    width: 50,
    backgroundColor: color || '#000'
  }} />
)