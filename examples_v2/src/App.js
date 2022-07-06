import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator, Animated } from 'react-native';

export default function App() {
  const [sizeAnimado, setSizeAnimado] = useState({
    width: new Animated.Value(150),
    height: new Animated.Value(50),
    OpAnimada: new Animated.Value(0)
  })

  function carregarGrafico() {
    Animated.sequence([
      Animated.timing(
        sizeAnimado.OpAnimada,
        {
          toValue: 1,
          duration: 400
        }
      ),
      Animated.timing(
        sizeAnimado.height,
        {
          toValue: 200,
          duration: 1000
        }
      )
    ]).start()
  }

  return (
    <View style={styles.container}>
      <Text>Vendas</Text>
      <View style={styles.header}>
        <TouchableOpacity onPress={carregarGrafico}>
          <Text style={{ fontSize: 25, color: '#FFFFFF' }}>Gerar Grafico</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Animated.View style={{ width: sizeAnimado.width, height: sizeAnimado.height, backgroundColor: '#FF0000', justifyContent: 'center', opacity: sizeAnimado.OpAnimada }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>R$ 150.00</Text>
        </Animated.View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#4169E1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});