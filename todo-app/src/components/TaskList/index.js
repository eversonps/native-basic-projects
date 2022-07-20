import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import firebase from '../../services/firebaseConnection';

import { Feather } from '@expo/vector-icons';
export default function TaskList({data, deleteItem, editItem}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{marginRight: 10}} onPress={() => deleteItem(data.key)}>
            <Feather name="trash" color="#FFF" size={20}/>
        </TouchableOpacity>

        <View>
            <TouchableWithoutFeedback style={{paddingRight: 10}} onPress={() => editItem(data)}>
                <Text style={{color: "#FFF", paddingRight: 10}}>{data.nome}</Text>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4
  },
});
