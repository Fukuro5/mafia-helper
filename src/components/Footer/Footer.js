import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    title: {
      fontSize: 12,
      fontStyle: 'italic',
      paddingVertical: 4,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Галаган Вадим Васильович ІПЗк-20-1</Text>
    </View>
  );
};

export default Footer;
