import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CustomContainer = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
      <Text style={styles.header}>REPÚBLICA FEDERATIVA DO BRASIL</Text>
      <Text style={styles.title}>IDENTIDADE VIRTUAL</Text>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s'}} style={styles.photo}/>
      
      <View style={styles.infoSection}>
        <Text style={styles.label}>NOME</Text>
        <Text style={styles.value}>Alberto da Silva Junior</Text>
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.label}>CPF</Text>
        <Text style={styles.value}>123.456.789-25</Text>
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.label}>DATA DE NASCIMENTO</Text>
        <Text style={styles.value}>01/02/2000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#84f0b55d',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 16,
  },
  header: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
    letterSpacing: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2d5a3d',
    marginBottom: 16,
    letterSpacing: 2,
  },
  photo: {
    width: 120,
    height: 140,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2d5a3d',
  },
  infoSection: {
    width: '100%',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
});

export default CustomContainer;
