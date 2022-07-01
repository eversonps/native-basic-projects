import { useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button } from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [data, setData] = useState({
    nome: '',
    idade: 0,
    sexo: 'M',
    limit: 600,
    isStudent: false
  })

  function enviar(){
    if(!data.nome){
      alert('O campo nome é obrigatório!')
      return
    }

    if(!data.idade){
      alert('O campo idade é obrigatório!')
      return
    }

    alert('Voce foi cadastrado com sucesso no nosso banco')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Banco</Text>

      <View style={styles.areaCampos}>
        <Text>Nome:</Text>
        <TextInput style={styles.input} placeholder='Insira seu nome' onChangeText={(nome) => setData({ ...data, nome })} value={data.nome} underlineColorAndroid={true} />
      </View>

      <View style={styles.areaCampos}>
        <Text>Idade:</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Insira sua idade' onChangeText={(idade) => setData({ ...data, idade })} value={data.idade} underlineColorAndroid={true}/>
      </View>

      <View style={styles.areaCampos}>
        <Text>Sexo:</Text>
        <Picker selectedValue={data.sexo} onValueChange={(sexo) => setData({ ...data, sexo })}>
          <Picker.Item key={0} value={'M'} label={'Masculino'} />
          <Picker.Item key={1} value={'F'} label={'Feminino'} />
        </Picker>
      </View>

      <View style={styles.areaCampos}>
        <Text>Limite do cartão: R${data.limit.toFixed(2)}</Text>
        <Slider minimumValue={600} maximumValue={3000} value={data.limit} onValueChange={(limit) => setData({ ...data, limit })} />
      </View>

      <View style={[styles.areaCampos, styles.areaSwitch]}>
        <Text>É estudante?</Text>
        <Switch style={styles.campos} value={data.isStudent} onValueChange={(isStudent) => setData({ ...data, isStudent })}/>
      </View>

      <Button title='Enviar' onPress={enviar}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  areaCampos: {
    width: '80%',
    marginTop: 20
  },
  areaSwitch: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    padding: 8
  }
});