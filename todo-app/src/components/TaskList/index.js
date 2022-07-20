import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection';

export default function TaskList({data}) {
  return (
    <View>
        <Text>{data.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
