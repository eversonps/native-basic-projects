import React from "react";
import Primeiro from "./components/Primeiro";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MinMax from "./components/MinMax";
import Comp, { Comp1, Comp2 } from "./components/Multi";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Pai from "./components/direta/Pai";

import PaiIndireta from "./components/indireta/Pai";
import Familia from "./components/relacao/Familia"
import Membro from "./components/relacao/Membro";
import Diferenciar from "./components/Diferenciar";
import ParImpar from "./components/ParImpar";

import UsuarioLogado from "./components/UsuarioLogado";
import ListaProdutos from "./components/produtos/ListaProdutos";
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
import DigiteSeuNome from "./components/DigiteSeuNome";
import FlexboxV1 from "./components/layout/FlexboxV1";
import FlexboxV2 from "./components/layout/FlexboxV2";
import FlexboxV3 from "./components/layout/FlexboxV3";
import FlexboxV4 from "./components/layout/FlexboxV4";

import Mega from "./components/mega/Mega";
export default () => (
  <SafeAreaView style={style.App}>
    {/* <MinMax min={3} max={20}/>
    <Primeiro />
    <Comp />
    <Comp1 />
    <Comp2 />
    <Aleatorio min={1} max={12}/>
    <Titulo principal="Titulo Principal" secundario="Titulo Secundário"/>
    <Botao />
    <Contador  inicial={100}/>
    <Pai />
    <PaiIndireta />
    <Diferenciar /> 
    <ParImpar />
    
    <Familia>
      <Membro nome="Alisson" sobrenome="Santos"></Membro>
      <Membro nome="Julia" sobrenome="Santos"></Membro>
      <Membro nome="Carlos" sobrenome="Santos"></Membro>
    </Familia>
    
    <ListaProdutos />
    <UsuarioLogado usuario={{nome: "Everson", email: "eversonpereiraofc@gmail.com"}}/> 
    
    <ListaProdutosV2 /> 
    <DigiteSeuNome />
    
    <FlexboxV1 />
    <FlexboxV2 />
    <FlexboxV3 />
    <FlexboxV4 /> */}

    <Mega qtdNumeros={7}/>
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})