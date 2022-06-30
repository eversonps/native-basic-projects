import { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Pessoa from './components/Pessoa/index.jsx';

export default function App() {
  const [feed, setFeed] = useState([{
    id: '1',
    nome: 'Everson',
    idade: 19,
    email: 'everson@gmail.com'
  },
  {
    id: '2',
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com'
  },
  {
    id: '3',
    nome: 'Pedro',
    idade: 12,
    email: 'pedro@gmail.com'
  },
  {
    id: '4',
    nome: 'Paulo',
    idade: 35,
    email: 'paulo@gmail.com'
  }])

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={(item) => item.id} data={feed} renderItem={({ item }) => <Pessoa data={item} />}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});