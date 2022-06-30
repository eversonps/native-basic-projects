import { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default function App() {
  const [status, setStatus] = useState(false)

  return (
    <View style={styles.container}>
      <Switch value={status} onValueChange={(newStatus) => setStatus(newStatus)} thumbColor={'blue'}/>
      <Text style={{fontSize: 30}}>{status ? 'Ativo' : 'Inativo'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});