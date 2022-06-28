import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <>
      <View style={{backgroundColor: "yellow", flex: 1}} />
      <View style={{backgroundColor: "red", flex: 1}} />
      <View style={{backgroundColor: "green", flex: 2}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


