import React from 'react';
import {
  View, StyleSheet, BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { PATHS } from '../../constants/paths';

export default function Rules() {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Button title={t('menuPage.startButton')} onPress={() => navigate(PATHS.GAME_SETUP)} />
      <Button title={t('menuPage.rulesButton')} />
      <Button title={t('menuPage.settingsButton')} />
      <Button title={t('menuPage.exitButton')} onPress={() => BackHandler.exitApp()} />
    </View>
  );
}
