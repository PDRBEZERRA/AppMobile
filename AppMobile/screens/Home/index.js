import React from 'react';
import { Text, ScrollView } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>
        Tela inicial teste.
      </Text>

      <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre')} />
    </ScrollView>
  );
}
