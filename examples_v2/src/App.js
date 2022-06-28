import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {
  const frases = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5']

  const [data, setData] = useState({
    frase: 'Frase 1',
    img: require('./img/biscoito.png')
  })

  const quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setData({
      ...data,
      frase: frases[numeroAleatorio],
      img: require('./img/biscoitoAberto.png')
    })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={data.img} />
      <Text style={styles.textoFrase}>{data.frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => quebraBiscoito()}>
        <View style={styles.botaoArea}>
          <Text style={styles.botaoTexto}>Quebrar Biscoitos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  botaoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 18,
    color: '#dd7b22',
    fontWeight: 'bold'
  }
});


