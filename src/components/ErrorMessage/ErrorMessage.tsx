import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { FieldError } from 'react-hook-form';

interface IErrorMessageProps {
  error: Pick<FieldError, 'message'>;
}

export default function ErrorMessage({
  error,
}: IErrorMessageProps) {
  const styles = StyleSheet.create({
    errorMessage: {
      color: '#ffab91',
      width: '80%',
      fontSize: 11,
      marginTop: 5,
    },
  });

  return (
    <Text style={styles.errorMessage}>{error && error.message}</Text>
  );
}
