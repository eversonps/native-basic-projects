import { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

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

function Pessoa({ data }) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{data.nome}</Text>
      <Text style={styles.textoPessoa}>{data.email}</Text>
      <Text style={styles.textoPessoa}>{data.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  areaPessoa: {
    backgroundColor: '#222',
    marginTop: 15
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }
});