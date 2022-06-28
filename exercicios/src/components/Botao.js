import React from "react";
import { Button } from "react-native";

export default function Botao(){
  function executar(){
    console.warn("executou!")
  }

  return (
    <Button title='executar' onPress={executar}/>
  )
}