import React, { useState } from 'react';
import { GAME_SETUP_STEPS } from './consts';
import GameSetupPlayersCount from './subpages/GameSetupPlayersCount/GameSetupPlayersCount';
import GameSetupPlayersNames from './subpages/GameSetupPlayersName/GameSetupPlayersNames';
import GameSetupPlayersRoles from './subpages/GameSetupPlayersRoles/GameSetupPlayersRoles';

export default function GameSetup() {
  const [currentStep, setCurrentStep] = useState(GAME_SETUP_STEPS.PLAYERS_COUNT);

  switch (currentStep) {
    case GAME_SETUP_STEPS.PLAYERS_COUNT:
      return (
        <GameSetupPlayersCount
          nextStep={() => setCurrentStep(GAME_SETUP_STEPS.PLAYERS_NAMES)}
        />
      );
    case GAME_SETUP_STEPS.PLAYERS_NAMES:
      return (
        <GameSetupPlayersNames
          nextStep={() => setCurrentStep(GAME_SETUP_STEPS.PLAYERS_ROLES)}
        />
      );
    case GAME_SETUP_STEPS.PLAYERS_ROLES:
      return <GameSetupPlayersRoles />;
    default:
      return null;
  }
}
