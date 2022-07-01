import { useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';

import Lista from './components/Lista';
export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Everson',
      descricao: 'Ótimo dia! :)',
      imgPerfil: 'https://www.amambainoticias.com.br/wp-content/uploads/media/images/2231/141495/5ee0ec7b76ae87904f4309c53aae5b5311d75b2d1a433.jpg',
      imgPublicacao: 'https://pbs.twimg.com/profile_images/1511742442973929484/BDUtYAvu_400x400.jpg',
      like: false,
      qtdLike: 0
    },
    {
      id: '2',
      nome: 'Everson',
      descricao: 'Ótimo dia! :)',
      imgPerfil: 'https://www.amambainoticias.com.br/wp-content/uploads/media/images/2231/141495/5ee0ec7b76ae87904f4309c53aae5b5311d75b2d1a433.jpg',
      imgPublicacao: 'https://pbs.twimg.com/profile_images/1511742442973929484/BDUtYAvu_400x400.jpg',
      like: false,
      qtdLike: 3
    }
  ])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./img/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./img/send.png')} style={styles.send} />
        </TouchableOpacity>
      </View>

      <FlatList showsHorizontalScrollIndicator={true}
        data={feed}
        keyExtractor={ (item) => item.id }
        renderItem={({ item }) => <Lista item={item}/>} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23
  }
});