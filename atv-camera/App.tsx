import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  
  if (!permission) {
    return <View />;
  }

  
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Necessita de permissão para acessar a câmera</Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.molduraExterno}>
        <CameraView 
          style={styles.camera} 
          facing={'front'} 
        >
          <View style={styles.overlay} />
        </CameraView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: '#ffffff', 
  },
  molduraExterno: {
    flex: 1,
    margin: 15,               
    borderWidth: 5,          
    borderColor: '#4b5257',  
    borderRadius: 34,         
    overflow: 'hidden',       
  },
  camera: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  link: {
    color: 'White',
    textAlign: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: '#4b5257',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  }
});