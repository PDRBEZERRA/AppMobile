import React from 'react';
import { Text, ScrollView } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.subtitle}>
        Segunda tela teste.
      </Text>

      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}
