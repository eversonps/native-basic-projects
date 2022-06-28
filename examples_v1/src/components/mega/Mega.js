import React from "react";
import { Text, TextInput, Button, View } from "react-native";
import estilo from "../estilo"
import Numero from "./Numero";

export default class Mega extends React.Component {
  state = {
    qtdNumeros: this.props.qtdNumeros + 1000,
    numeros: []
  }

  alterarQuantidadeNumero = (qtd) => {
    this.setState({ qtdNumeros: +qtd })
  }

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros).fill().reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], []).sort((a, b) => a - b)
    this.setState({ numeros })
  }

  gerarNumeroNaoContido = nums => {
    const novo = parseInt((Math.random() * 60) + 1)

    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  }

  exibirNumeros = () => {
    const nums = this.state.numeros
    return nums.map(num => {
      return <Numero num={num} />
    })
  }

  render() {
    return (
      <>
        <Text style={estilo.fontG}>Gerador de Mega-Sena {this.state.qtdNumeros}</Text>
        <TextInput keyboardType="numeric" style={{ borderBottomWidth: 1 }} placeholder="Quantidade de números" value={this.state.qtdNumeros} onChangeText={this.alterarQuantidadeNumero} />
        <Button title="Gerar" onPress={this.gerarNumeros}></Button>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 20,
          justifyContent: 'center'
        }}>
          {this.exibirNumeros()}
        </View>
      </>
    )
  }
}