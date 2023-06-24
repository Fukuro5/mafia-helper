import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

function Header() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#424242',
      paddingTop: 20,
    },
  });

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#c62828',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#607D8B',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#607D8B',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#ffffff',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#c62828',
    stepIndicatorLabelFinishedColor: '#aaaaaa',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#fff',
    labelSize: 13,
    currentStepLabelColor: '#c62828',
  };

  const labels = ['Кількість', 'Імена', 'Ролі'];

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={0}
        labels={labels}
        stepCount={3}
      />
    </View>
  );
}

export default Header;
