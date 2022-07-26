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
 } from 'react-native'; 
 
 export default function TextoCentral({children, corFundo, corTexto}) {
   return (
     <SafeAreaView style={[styles.container, {backgroundColor: corFundo || '#000'}]}>
       <Text style={{fontSize: 50, color: corTexto || '#FFF'}}>{children}</Text>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     width: '100%',
     justifyContent: 'center',
     alignItems: 'center'
   },
 });
 