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
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Home from "./src/pages/Home"
import About from "./src/pages/About"
import Contact from './src/pages/Contact';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#202225",
          borderTopWidth: 0
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size}/>
          }
        }}/>
        <Tab.Screen name="Sobre" component={About} options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="file-text" color={color} size={size}/>
          }
        }}/>
        <Tab.Screen name="Contato" component={Contact} options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="phone-call" color={color} size={size}/>
          }
        }}/>
      </Tab.Navigator>
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
