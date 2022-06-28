import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "yellow", height: 50, width: 50}} />
      <View style={{backgroundColor: "red", height: 50, width: 50}} />
      <View style={{backgroundColor: "green", height: 50, width: 50}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


