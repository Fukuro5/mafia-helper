import { ADD_PLAYER_ON_VOTE, CHANGE_PLAYERS, CHANGE_VOTED_PLAYERS, RESET_VOTED_PLAYERS, SET_COUNT_OF_PLAYERS } from './types';

const initialState = {
  countOfPlayers: 0,
  players: [],
  killed: '',
  voted: [],
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case SET_COUNT_OF_PLAYERS:
      return {
        ...state,
        countOfPlayers: action.countOfPlayers,
        players: action.players,
      };
    case CHANGE_PLAYERS:
      return {
        ...state,
        players: action.players,
      };
    case ADD_PLAYER_ON_VOTE:
      return {
        ...state,
        voted: [...state.voted, action.player],
      };
    case CHANGE_VOTED_PLAYERS:
      return {
        ...state,
        voted: action.voted,
      };
    case RESET_VOTED_PLAYERS:
      return {
        ...state,
        voted: [],
      };
    default:
      return state;
  }
}
