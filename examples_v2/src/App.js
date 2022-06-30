import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [valor, setValor] = useState(0)

  return (
    <View style={styles.container}>
      <Slider style={styles.slider} minimumValue={0} maximumValue={100} value={0} onValueChange={(valor) => setValor(valor)}/>
      <Text style={styles.texto}>Voce tem {valor.toFixed(2)} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slider: {
    width: '80%',
  },
  texto: {
    fontSize: 20
  }
});