import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  View, FlatList, StyleSheet, DrawerLayoutAndroid, Text, Image, TextInput, NativeSyntheticEvent, TextInputChangeEventData,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../constants/paths';
import CountdownTimer from './components/CountdownTimer';
import { selectPlayers, selectVotedPlayers } from '../../store/Game/selectors';
import {
  addVotes,
  removePlayer, resetVotedPlayers,
} from '../../store/Game/actions';
import ButtonImage from '../../components/ButtonImage/ButtonImage';
import playPng from '../../assets/images/play.png';
import dayPng from '../../assets/images/day.png';
import nightPng from '../../assets/images/night.png';
import NavigationView from './components/NavigationView';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { IPlayer } from 'store/Game/types';

export default function Game() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const players = useSelector(selectPlayers);
  const votedPlayers = useSelector(selectVotedPlayers);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentTime, setCurrentTime] = useState('Night');
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isVoting, setIsVoting] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      justifyContent: 'center',
      paddingHorizontal: 20,
      color: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 10,
      color: '#fff',
      paddingHorizontal: 10,
    },
  });

  const checkIsGameOver = () => {
    if (players.filter((player: IPlayer) => player.role === 'masons').length === 0) {
      return true;
    }
    if (players.filter((player: IPlayer) => player.role === 'masons').length >= (players.filter((player: IPlayer) => player.role === 'protector').length + players.filter((player: IPlayer) => player.role === 'seer').length)) {
      return true;
    }

    return true;
  };

  const onComplete = () => {
    setIsTimerPlaying(false);

    if (checkIsGameOver()) {
      navigate(PATHS.GAME_OVER);
    } else if (currentTime === 'Night') {
      setCurrentTime('Day');
      setCurrentRound(currentRound + 1);
    } else if (isVoting) {
      dispatch(
        removePlayer(
          votedPlayers.reduce(
            (prev, current) => ((prev.votes > current.votes) ? prev : current),
          ).name,
        ),
      );
      dispatch(resetVotedPlayers());
      setCurrentTime('Night');
      setIsVoting(false);
    } else if (currentPlayer === players.length - 1) {
      if (votedPlayers.length > 0) {
        setIsVoting(true);
      } else {
        setCurrentTime('Night');
      }
    } else {
      setCurrentPlayer(currentPlayer + 1);
    }

    return [true, 5];
  };

  useEffect(() => {
    if (currentTime === 'Day' && votedPlayers.length > 0) {
      dispatch(
        removePlayer(
          votedPlayers.reduce(
            (prev, current) => ((prev.value > current.value) ? prev : current),
          ).name,
        ),
      );
    }
  }, []);

  const handleSubmitEditing = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
    console.log(e.nativeEvent.text);
    dispatch(addVotes(name, +e.nativeEvent.text));
  };

  return (
    <DrawerLayoutAndroid
      drawerWidth={200}
      drawerPosition="left"
      renderNavigationView={() => <NavigationView players={players} currentTime={currentTime} />}
      style={styles.container}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={currentTime === 'Day' ? dayPng : nightPng}
          style={{
            width: 50, height: 50, position: 'absolute', right: 10, top: 10,
          }}
        />
        <Text style={{
          margin: 10, fontSize: 15, textAlign: 'right', color: '#fff',
        }}
        >
          {t('gamePage.currentRound', { currentRound })}
        </Text>
        {currentTime === 'Day' && (
        <Text style={{
          margin: 10, fontSize: 15, textAlign: 'right', color: '#fff',
        }}
        >
          {isVoting ? t('gamePage.voting') : t('gamePage.talking', { playerName: players[currentPlayer].name })}
        </Text>
        )}
        <CountdownTimer isTimerPlaying={isTimerPlaying} onComplete={onComplete} />
        <ButtonImage image={playPng} onPress={() => setIsTimerPlaying(!isTimerPlaying)} />
        {votedPlayers && votedPlayers.length > 0 && (
          <Text style={{ color: '#fff' }}>{t('gamePage.onVote')}</Text>)}
        <FlatList
          data={votedPlayers}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          renderItem={({ index }) => (
            <View style={{
              paddingVertical: 5, flexDirection: 'row', alignItems: 'center', width: 150, justifyContent: 'space-between', marginTop: 20,
            }}
            >
              <Text style={{ color: '#fff' }}>
                {votedPlayers[index].name}
              </Text>
              {isVoting && (
                <TextInput
                  style={styles.input}
                />
              )}
            </View>
          )}
        />
      </View>
      <View style={{
        position: 'absolute', width: 5, height: 100, backgroundColor: '#607D8B', top: '40%',
      }}
      />
    </DrawerLayoutAndroid>
  );
}
