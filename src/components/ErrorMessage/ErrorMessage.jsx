import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text,
} from 'react-native';

export default function ErrorMessage({
  error,
}) {
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

ErrorMessage.propTypes = {
  label: PropTypes.string.isRequired,
};
