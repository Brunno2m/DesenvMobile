import React from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";


export default function MyText() {
  return (
    <>
      <Text>Esse é um teste de modulaçao</Text>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} defaultValue="Digite algo..." />

    </>
  );
}