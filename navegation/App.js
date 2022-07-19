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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home"
import About from "./src/pages/About"
import Contact from './src/pages/Contact';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: "Tela Inicio",
          headerStyle: {
            backgroundColor: "121212"
          },
          headerTintColor: "#FFF",
          headerShown: false
        }} />

        <Stack.Screen name="Sobre" component={About} options={{
          title: "Pagina sobre"
        }}/>

        <Stack.Screen name="Contato" component={Contact} options={{
          title: "Contato"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default App;
