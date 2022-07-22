/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// AIzaSyDAMORbQ5M-iCHW_80hQXpOo9WcahKlBtg

import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

export default function App(){
  const [region, setRegion] = useState({
    latitude: -23.5492243,
    longitude: -46.5813785,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  const [markers, setMarkers] = useState([
    {key: 0, coords: {latitude: -15.8080374, longitude: -47.8750231}, image: require('./src/assets/images/carro_left.png')},
    {key: 1, coords: {latitude: -15.8380374, longitude: -47.8850231}, image: require('./src/assets/images/carro_right.png')}
  ])

  function changedMap(regiao){
    setRegion({...region, longitude: regiao.longitude, latitude: regiao.latitude})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginBottom: 20}}>
        <Button title='Brasilia' onPress={() => setRegion({...region, latitude: -15.8080374, longitude: -47.8750231})}/>
        <Button title='Sao Paulo' onPress={() => setRegion({...region, latitude: -23.5492243, longitude: -46.5813785})}/>
      </View>
      <MapView style={styles.mapa}
       region={region} 
       onRegionChangeComplete={changedMap} 
       onPress={(e) => alert('Latitude Clicada: ' + e.nativeEvent.coordinate.latitude)}
      > 
        {markers.map(marker => {
          return <Marker image={marker.image} coordinate={marker.coords} key={marker.key} /* pinColor={marker.pinColor} */ />
        })
        }
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapa:{
    width: '100%',
    height: 550
  }
});
