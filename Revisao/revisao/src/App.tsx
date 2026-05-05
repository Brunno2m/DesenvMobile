import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  Keyboard
} from 'react-native';

export default function App() {
  // Estado para armazenar os números sorteados
  const [numeros, setNumeros] = useState<number[]>([]);
  // Estado para a quantidade de dezenas (padrão é 6)
  const [quantidadeText, setQuantidadeText] = useState<string>('6');

  const sortearNumeros = () => {
    // Esconde o teclado ao clicar no botão
    Keyboard.dismiss();

    // Converte o texto digitado para número
    const qtd = parseInt(quantidadeText, 10);

    // Validação de segurança exigida na regra 2
    if (isNaN(qtd) || qtd < 6 || qtd > 20) {
      Alert.alert('Atenção', 'Por favor, insira uma quantidade entre 6 e 20 dezenas.');
      return;
    }

    const novosNumeros: number[] = [];

    
    while (novosNumeros.length < qtd) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      
      if (!novosNumeros.includes(numeroAleatorio)) {
        novosNumeros.push(numeroAleatorio);
      }
    }

    
    novosNumeros.sort((a, b) => a - b);
    
    
    setNumeros(novosNumeros);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorteio Megasena</Text>

      {/* Requisito Opcional: Campo de texto para quantidade */}
      <Text style={styles.label}>Quantidade de dezenas (6 a 20):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantidadeText}
        onChangeText={setQuantidadeText}
        maxLength={2}
      />

      <TouchableOpacity style={styles.button} onPress={sortearNumeros}>
        <Text style={styles.buttonText}>Gerar Números</Text>
      </TouchableOpacity>

      {/* Área onde os números sorteados são exibidos */}
      <View style={styles.numbersContainer}>
        {numeros.map((numero, index) => (
          <View key={index} style={styles.ball}>
            <Text style={styles.ballText}>
              {/* Formata o número para ter sempre duas casas, ex: '05' */}
              {numero.toString().padStart(2, '0')}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#209869', // Cor característica da Megasena
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#209869',
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  ball: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#209869',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ballText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});