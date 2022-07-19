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

 import StackRoutes from './stackRoutes';
 
 import { createDrawerNavigator } from '@react-navigation/drawer';
 
 import Contact from '../pages/Contact'
 import About from '../pages/About'

 const Drawer = createDrawerNavigator()
 const Routes = () => {
   return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={StackRoutes}/>
      <Drawer.Screen name="Sobre" component={About}/>
      <Drawer.Screen name="Contato" component={Contact}/>
    </Drawer.Navigator>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignContent: "center",
     justifyContent: "center"
   }
 });
 
 export default Routes;
 