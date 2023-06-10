import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, FlatList, StyleSheet,
} from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormProvider, useForm,
} from 'react-hook-form';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { selectPlayers } from '../../../../store/Game/selectors';
import { changePlayers } from '../../../../store/Game/actions';
import { useGameSetupPlayersNameSchema } from './GameSetupPlayersNameConfig';
import { useTranslation } from 'react-i18next';

export default function GameSetupPlayersNames({ nextStep }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const players = useSelector(selectPlayers);
  const schema = useGameSetupPlayersNameSchema(players);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
  });

  const defaultValues = {
    playersCount: null,
  };

  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  const goNext = handleSubmit((values) => {
    const newPlayers = players.reduce((acc, player, index) => {
      acc[index].name = values[index + 1];
      return acc;
    }, players);
    dispatch(changePlayers(newPlayers));
    nextStep();
  });

  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          style={{ width: '100%' }}
          renderItem={({ index }) => <Input label={t('playersNamePage.label', { number: index + 1 })} name={`${index + 1}`} />}
        />
        <Button type="submit" title={t('common.next')} onPress={goNext} />
      </View>
    </FormProvider>
  );
}
