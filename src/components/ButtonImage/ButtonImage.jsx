import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, Pressable, TouchableOpacity, Image,
} from 'react-native';

export default function ButtonImage({ image, onPress }) {
  const styles = StyleSheet.create({
    button: {
      marginVertical: 20,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={image}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
}

ButtonImage.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

ButtonImage.defaultProps = {
  onPress: () => {},
};
