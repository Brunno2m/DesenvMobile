import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Alert } from 'react-native';

const ConsumoCalc: React.FC = () => {
  const [distancia, setDistancia] = useState<string>('');
  const [combustivel, setCombustivel] = useState<string>('');
  const [consumo, setConsumo] = useState<string>('');

  const calcularConsumo = (): void => {
    const dist = parseFloat(distancia);
    const lt = parseFloat(combustivel);

    if (!dist || !lt) {
      Alert.alert(
        'Valores invalidos',
        'Informe distancia e litros gastos com valor maior que 0.'
      );
      return;
    }

    const resultado = dist / lt;
    setConsumo(resultado.toFixed(2));
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Consumo</Text>

      <TextInput
        style={styles.input}
        placeholder="Quilometragem percorrida (km)"
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />

      <TextInput
        style={styles.input}
        placeholder="Litros gastos"
        keyboardType="numeric"
        value={combustivel}
        onChangeText={setCombustivel}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularConsumo}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>

      {consumo !== '' && (
        <Text style={styles.resultado}>Consumo: {consumo} km/l</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 24,
    color: '#12343b',
  },
  input: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderColor: '#c8d9d6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#1f6f78',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  resultado: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '700',
    color: '#12343b',
  },
});

export default ConsumoCalc;
