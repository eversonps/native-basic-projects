import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    width: 150
  },
  box2: {
    backgroundColor: 'blue',
    height: 250,
    width: 150
  },
  box3: {
    backgroundColor: 'green',
    height: 250,
    width: 150
  },
  box4: {
    backgroundColor: 'orange',
    height: 250,
    width: 150
  }
});


