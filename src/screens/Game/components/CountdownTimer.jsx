import React from 'react';
import { Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function CountdownTimer({ isTimerPlaying, onComplete }) {
  return (
    <CountdownCircleTimer
      key={isTimerPlaying}
      isPlaying={isTimerPlaying}
      duration={1}
      size={100}
      colors={['#00bfa5', '#ffea00', '#ff6d00', '#ff0000']}
      colorsTime={[60, 30, 15, 6]}
      onComplete={onComplete}
    >
      {({ remainingTime }) => <Text style={{ color: "#fff" }}>{remainingTime}</Text>}
    </CountdownCircleTimer>
  );
}
