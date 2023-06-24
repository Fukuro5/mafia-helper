import React from 'react';
import {
  StyleSheet, Text, Pressable,
} from 'react-native';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: IButtonProps) {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#c62828',
      marginVertical: 20,
      width: '80%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonText: {
      color: '#fff',
    },
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
