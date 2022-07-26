/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
     Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native'; 

 import { useNavigation } from '@react-navigation/native';
 
 export default function PassoStack({children, avancar, avancarParam, voltar}) {
   const navigation = useNavigation() 
   return (
     <View style={{flex: 1}}>
        <View>
            { voltar && <Button title='Voltar' onPress={() => navigation.goBack()}/>}
        </View>

        <View>
            { avancar && <Button title='Avançar' onPress={() => navigation.push(avancar, avancarParam || null)}/>}
        </View>
            
        <View style={{flex: 1}}>
            {children}
        </View>
     </View>
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
 