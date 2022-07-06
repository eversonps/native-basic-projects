import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator, Animated } from 'react-native';

export default function App() {
  const [sizeAnimado, setSizeAnimado] = useState({
    width: new Animated.Value(150),
    height: new Animated.Value(50)
  })

  Animated.loop(
    Animated.sequence([
      Animated.timing(
        sizeAnimado.width,
        {
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        sizeAnimado.width,
        {
          toValue: 150,
          duration: 2000
        }
      )
    ])
    
  ).start()

  return (
    <View style={styles.container}>
      <Animated.View style={{ width: sizeAnimado.width, height: sizeAnimado.height, backgroundColor: '#4169E1', justifyContent: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>Carregando...</Text>
      </Animated.View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});