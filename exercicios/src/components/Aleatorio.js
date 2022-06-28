import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default function Aleatorio({min, max}){
  function randomNumber(){
    return Math.floor((Math.random() * (max - min)) + min)
  }

  return(
    <Text style={estilo.fontG}>{randomNumber()}</Text>
  )
}