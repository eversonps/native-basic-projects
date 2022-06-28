import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundoo!</Text>
      <Text style={{ color: 'red', fontSize: 18, margin: 15}}>Meu primeiro app!</Text>
      <Logo largura={200} altura={200} descricao="São Paulo FC"/>
    </View>
  );
}

function Logo({largura, altura, descricao}) {
  return (
    <View>
       <Image source={{uri: "https://logodetimes.com/wp-content/uploads/sao-paulo.png"}} style={{width: largura, height: altura}}/>
       <Text>{descricao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


