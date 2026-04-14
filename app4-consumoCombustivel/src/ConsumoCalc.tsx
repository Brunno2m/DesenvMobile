import React, { useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard,Alert } from 'react-native';

const ConsumoCalc: React.FC = () => {
  const [distancia, setDistancia] = useState<string>('');
  const [combustivel, setCombustivel] = useState<string>('');
  const [consumo, setConsumo] = useState<string>('');

    const calcularConsumo = (): void => {
        const dist = parseFloat(distancia);
        const lt = parseFloat(combustivel);