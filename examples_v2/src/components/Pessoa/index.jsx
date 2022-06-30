import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Pessoa({data}) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{data.nome}</Text>
      <Text style={styles.textoPessoa}>{data.email}</Text>
      <Text style={styles.textoPessoa}>{data.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    marginTop: 15
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }
});
