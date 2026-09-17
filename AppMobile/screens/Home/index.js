import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.saudacao}>Olá!</Text>
        <Text style={styles.subtitulo}>Bem-vindo à Planengen</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Obras cadastradas</Text>
        <Text style={styles.cardValor}>0</Text>
        <Text style={styles.cardDescricao}>
          Nenhuma obra cadastrada ainda. Essa tela vai mostrar o resumo das obras em andamento.
        </Text>
      </View>
    </ScrollView>
  );
}
