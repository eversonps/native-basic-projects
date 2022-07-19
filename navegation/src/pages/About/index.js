/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useLayoutEffect } from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity, 
   Button
 } from 'react-native';
 
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather';
import { TabRouter, useNavigation, useRoute } from '@react-navigation/native';

 const About = () => {
  const route = useRoute() 
  const navigation = useNavigation()
  
  function navegaContato(){
    navigation.navigate("Contato")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === "" ? "Pagina Sobre" : route.params?.nome
    })
  }, [navigation])

  return (
     <SafeAreaView style={styles.container}>
       <Text style={{textAlign: "center"}}>TELA SOBRE</Text>
       <Text style={{textAlign: "center"}}>{route.params?.email}</Text>
       <Text style={{textAlign: "center"}}>{route.params?.nome}</Text>
       <Button title="Ir para contato" onPress={() => navegaContato()}/>  
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignContent: "center",
     justifyContent: "center"
   }
 });
 
 export default About;
 