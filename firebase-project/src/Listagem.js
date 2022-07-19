import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState, useEffect} from 'react';

export default function App({data}) {
  return (
    <View style={styles.container}>
        <Text>{data.nome}</Text>
        <Text>{data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  texto:{
    fontSize: 25
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212"
  }
});
