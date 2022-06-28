import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

export default function Titulo({ principal, secundario }) {
  return (
    <>
      <Text style={estilo.fontG}>{principal}</Text>
      <Text style={estilo.fontG}>{secundario}</Text>
    </>
  )
}