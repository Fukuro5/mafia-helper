import React from 'react';
import {
  StyleSheet, TouchableOpacity, Image,
} from 'react-native';

interface IButtonImageProps {
  image: any;
  onPress: () => void;
}

export default function ButtonImage({ image, onPress }: IButtonImageProps) {
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
