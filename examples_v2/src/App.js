import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundoo!</Text>
      <Text style={{ color: 'red', fontSize: 18, margin: 15}}>Meu primeiro app!</Text>
      <Image source={{uri: "https://logodetimes.com/wp-content/uploads/sao-paulo.png"}} style={{width: 300, height: 200}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
