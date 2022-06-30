import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [pizzas, setPizzas] = useState({
    index: 0,
    data: [
      { key: 0, nome: 'Strogonoff', valor: 35.90 },
      { key: 1, nome: 'Calabresa', valor: 37.90 },
      { key: 2, nome: 'Portuguesa', valor: 32.90 }
    ]
  })

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker style={styles.picker} selectedValue={pizzas.index} onValueChange={(itemValue, itemIndex) => setPizzas({
        ...pizzas,
        index: itemValue
      })}>
        {pizzas.data.map(pizza => {
          return <Picker.Item key={pizza.key} value={pizza.key} label={pizza.nome} />
        })}

      </Picker>

      <Text style={styles.pizzas}>Voce escolheu a pizza sabor {pizzas.data[pizzas.index].nome}</Text>
      <Text style={styles.pizzas}>R$: {pizzas.data[pizzas.index].valor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    fontSize: 28,
    marginTop: 15
  },
  picker: {
    width: 200
  }
});