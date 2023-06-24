import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, FlatList, StyleSheet, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Button from '../../../../components/Button/Button';
import { PATHS } from '../../../../constants/paths';
import { selectPlayers } from '../../../../store/Game/selectors';
import { changePlayers } from '../../../../store/Game/actions';
import { useTranslation } from 'react-i18next';

export default function GameSetupPlayersRoles() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const players = useSelector(selectPlayers);
  const [selectedValue, setSelectedValue] = useState(players);
  const { navigate } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      paddingHorizontal: 20,
      alignItems: 'center',
      width: '100%',
      paddingTop: 30,
    },
    text: {
      color: '#fff',
    },
    pickerItem: {
      color: '#fff',
      backgroundColor: '#424242',
      height: 100,
    },
    flatList: {
      width: '100%',
      paddingHorizontal: 38,
    },
  });

  const goNext = () => {
    dispatch(changePlayers(selectedValue));
    navigate(PATHS.GAME);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        style={styles.flatList}
        renderItem={({ index }) => (
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', width: '100%', marginBottom: 10 }}>
            <Text style={styles.text}>{players[index].name}</Text>
            <Picker
              selectedValue={selectedValue[index].role}
              onValueChange={(itemValue) => {
                const newSelectedValue = [...selectedValue];
                newSelectedValue[index].role = itemValue;
                setSelectedValue(newSelectedValue);
              }}
            >
              <Picker.Item label={t('playersRolesPage.roles.seer')} value="seer" style={styles.pickerItem} />
              <Picker.Item label={t('playersRolesPage.roles.protector')} value="protector" style={styles.pickerItem} />
              <Picker.Item label={t('playersRolesPage.roles.mason')} value="masons" style={styles.pickerItem} />
            </Picker>
          </View>
        )}
      />
      <Button title={t('common.next')} onPress={goNext} />
    </View>
  );
}
