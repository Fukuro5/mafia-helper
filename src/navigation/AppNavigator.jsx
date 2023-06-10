import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../screens/Menu/Menu';
import GameSetupScreen from '../screens/GameSetup/GameSetup';
import GameScreen from '../screens/Game/Game';
import GameOverScreen from '../screens/GameOver/GameOver';
import RulesScreen from '../screens/Rules/Rules';
import SettingsScreen from '../screens/Settings/Settings';
import { PATHS } from '../constants/paths';
import Header from '../components/Header/Header';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={PATHS.MENU} component={MenuScreen} />
        <Stack.Screen
          name={PATHS.GAME_SETUP}
          component={GameSetupScreen}
          options={{
            headerShown: true,
            header: () => <Header />,
          }}
        />
        <Stack.Screen name={PATHS.GAME} component={GameScreen} />
        <Stack.Screen name={PATHS.GAME_OVER} component={GameOverScreen} />
        <Stack.Screen name={PATHS.RULES} component={RulesScreen} />
        <Stack.Screen name={PATHS.SETTINGS} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
