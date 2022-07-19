/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: "center"}}>Ola, ola mundo</Text>
      <FontAwesome name="home" size={25} color="#11118c" />
      <FontAwesome name="user" size={25} color="#54a300" />
      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome name="youtube" size={25} color="#FFF" />
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  btnYoutube: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 5
  },
  btnText: {
    paddingLeft: 5,
    color: '#FFF'
  }
});

export default App;
