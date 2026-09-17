import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.marca}>PLANENGEN</Text>
        <Text style={styles.marcaSub}>CONSULTORIA E CONSTRUÇÃO</Text>
        <Text style={styles.titulo}>Gestão de Custos de Obra</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Acesso à plataforma</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <View style={styles.espaco} />

        <Button title="Entrar na plataforma" onPress={() => navigation.navigate('Home')} />

        <Text style={styles.cadastroTexto}>
          Ainda não tem cadastro? <Text style={styles.cadastroLink}>Criar conta</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
