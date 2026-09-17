import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Button({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === 'outline' && styles.buttonOutline]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, variant === 'outline' && styles.buttonTextOutline]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
