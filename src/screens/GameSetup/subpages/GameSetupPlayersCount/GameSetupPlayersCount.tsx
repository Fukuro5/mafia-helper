import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FormProvider, useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  View, StyleSheet,
} from 'react-native';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { setCountOfPlayers } from '../../../../store/Game/actions';
import { useGameSetupPlayersCOuntSchema } from './GameSetupPlayersCountConfig';
import { useTranslation } from 'react-i18next';

export default function GameSetupPlayersCount({ nextStep }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const schema = useGameSetupPlayersCOuntSchema();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      justifyContent: 'center',
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
    dispatch(setCountOfPlayers(values.playersCount));
    nextStep();
  });

  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <Input label={t('playersCountPage.label')} inputMode="numeric" name="playersCount" />
        <Button title={t('common.next')} onPress={goNext} />
      </View>
    </FormProvider>
  );
}
