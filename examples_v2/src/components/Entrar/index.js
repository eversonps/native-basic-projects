import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Entrar({ sair }) {
  return (
    <View style={{ backgroundColor: '#292929', flex: 1, width: '100%', height: 350, borderRadius: 15 }}>
      <Text style={{ color: '#FFF', fontSize: 28, paddingTop: 15 }}>Seja bem vindo</Text>
      <Button title='Sair' onPress={() => sair()} />
    </View>
  );
}
