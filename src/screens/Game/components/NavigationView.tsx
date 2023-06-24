import { FlatList, Image, Text, View } from "react-native";
import Button from "../../../components/Button/Button";

import seerPng from '../../../assets/images/seer.png';
import masonPng from '../../../assets/images/mason.png';
import protectorPng from '../../../assets/images/protector.png';
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addPlayerOnVote, removePlayer } from "../../../store/Game/actions";

interface INavigationViewProps {
  players: {
    role: string;
    name: string;
  }[];
  currentTime: string;
}

const NavigationView = ({ players, currentTime }: INavigationViewProps) => {
  const dispatch = useAppDispatch();
  const getPlayerRole = (role: string) => {
    if (role === 'masons') return masonPng;
    if (role === 'protector') return protectorPng;
    return seerPng;
  };

  const onActionsButtonPress = (playerIndex: number) => {
    if (currentTime === 'Night') {
      dispatch(removePlayer(players[playerIndex].name));
    } else {
      dispatch(addPlayerOnVote(players[playerIndex]));
    }
  };

  return (
    <View style={{
      flex: 1, backgroundColor: '#424242', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        renderItem={({ index }) => (
          <View style={{ paddingVertical: 5, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={getPlayerRole(players[index].role)}
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
              <Text style={{ color: '#fff' }}>
                {players[index].name}
              </Text>
            </View>
            <Button
              title={currentTime === 'Night' ? 'Вбити' : 'On vote'}
              onPress={() => onActionsButtonPress(index)}
            />
          </View>
        )}
      />
    </View>
  )
}

export default NavigationView;
