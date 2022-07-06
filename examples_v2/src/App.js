import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator, Animated } from 'react-native';

export default function App() {
  const [animated, setAnimated] = useState({
    width: new Animated.Value(0)
  })

  Animated.timing(
    animated.width, {
      toValue: 100,
      duration: 5000
    }
  ).start()

  let porcentAnimated = animated.width.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })
  return (
    <View style={styles.container}>
      <Animated.View style={{backgroundColor: '#4169E1', width: porcentAnimated, height: 25}}></Animated.View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});