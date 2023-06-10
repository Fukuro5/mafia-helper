// write GameOver component here
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, StyleSheet, Image
} from 'react-native';
import Button from '../../components/Button/Button';
// import { PATHS } from '../../constants/paths';
import { selectPlayers } from '../../store/Game/selectors';
import { useTranslation } from 'react-i18next';
import masonPng from '../../assets/images/mason.png';
// import { resetGame } from '../../store/Game/actions';

export default function GameOver() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const players = useSelector(selectPlayers);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 20,
    },
  });

  // const goNext = () => {
  //   dispatch(resetGame());
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t('gameOverScreen.title')}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>
          {t('gameOverScreen.winner')}
        </Text>
        <Image
          source={masonPng}
          style={{
            width: 50, height: 50, marginLeft: 20
          }}
        />
      </View>
      <Button title="До головного меню" onPress={() => {}} />
    </View>
  );
}
