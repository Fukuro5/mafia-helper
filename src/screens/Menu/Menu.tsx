import React from 'react';
import {
  View, StyleSheet, BackHandler, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { PATHS } from '../../constants/paths';
import MenuJpg from '../../assets/images/menu.jpg';

export default function Menu() {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 50,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Image source={MenuJpg} style={styles.image} />
      <Button title={t('menuPage.startButton')} onPress={() => navigate(PATHS.GAME_SETUP)} />
      <Button title={t('menuPage.rulesButton')} />
      <Button title={t('menuPage.settingsButton')} />
      <Button title={t('menuPage.exitButton')} onPress={() => BackHandler.exitApp()} />
    </View>
  );
}
