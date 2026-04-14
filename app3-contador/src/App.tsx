import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);

  const incrementar = () => setCount((prev) => prev + 1);
  const decrementar = () => setCount((prev) => prev - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={decrementar}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.counterText}>{count}</Text>
        
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    minWidth: 80,
    textAlign: 'center',
  }
});

