import React from 'react';
import { Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

interface ICountdownTimerProps {
  isTimerPlaying: boolean;
  onComplete: () => void;
}

export default function CountdownTimer({ isTimerPlaying, onComplete }: ICountdownTimerProps) {
  return (
    <CountdownCircleTimer
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
