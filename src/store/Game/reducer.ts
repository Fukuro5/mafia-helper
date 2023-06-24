import { GAME_ACTIONS } from './consts';
import { IGameReducer } from './types';

const initialState = {
  countOfPlayers: 0,
  players: [],
  killed: '',
  voted: [],
};

const game: IGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ACTIONS.SET_COUNT_OF_PLAYERS:
      return {
        ...state,
        countOfPlayers: action.countOfPlayers,
        players: action.players,
      };
    case GAME_ACTIONS.CHANGE_PLAYERS:
      return {
        ...state,
        players: action.players,
      };
    case GAME_ACTIONS.ADD_PLAYER_ON_VOTE:
      return {
        ...state,
        voted: [...state.voted, action.player],
      };
    case GAME_ACTIONS.CHANGE_VOTED_PLAYERS:
      return {
        ...state,
        voted: action.voted,
      };
    case GAME_ACTIONS.RESET_VOTED_PLAYERS:
      return {
        ...state,
        voted: [],
      };
    default:
      return state;
  }
}

export default game;
