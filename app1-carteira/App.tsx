import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Identidade from './identidade';

export default function App() {
  return (
    <Identidade style={{ margin: 40 }}>
      <Text></Text>
    </Identidade>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
