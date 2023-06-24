import { Dispatch,  } from 'redux';
import { GAME_ACTIONS } from './consts';
import { IPlayer, IRootGameState, IVotedPlayer, TCountOfPlayers } from './types';

export const addPlayerOnVote = (player: IPlayer) => ({
  type: GAME_ACTIONS.ADD_PLAYER_ON_VOTE,
  player,
});

export const setCountOfPlayers = (countOfPlayers: TCountOfPlayers) => ({
  type: GAME_ACTIONS.SET_COUNT_OF_PLAYERS,
  countOfPlayers,
  players: [...Array(+countOfPlayers)].map(() => ({ name: '', role: '', isNominated: false })),
});

export const changePlayers = (players: IPlayer[]) => ({
  type: GAME_ACTIONS.CHANGE_PLAYERS,
  players,
});

export const removePlayer = (playerName: string) => (dispatch: Dispatch, getState: () => IRootGameState) => {
  const { game: { players } } = getState();
  const newPlayers = players.filter(({ name }) => name !== playerName);
  dispatch(changePlayers(newPlayers));
};

export const changeVotedPlayers = (voted: IVotedPlayer[]) => ({
  type: GAME_ACTIONS.CHANGE_VOTED_PLAYERS,
  voted,
});

export const addVotes = (playerName: string, votes: number) => (dispatch: Dispatch, getState: () => IRootGameState) => {
  const { game: { voted } } = getState();
  const newVotedPlayers = voted.map((player) => {
    if (player.name === playerName) {
      return { ...player, votes };
    }
    return player;
  });
  dispatch(changeVotedPlayers(newVotedPlayers));
};

export const resetVotedPlayers = () => ({
  type: GAME_ACTIONS.RESET_VOTED_PLAYERS,
});
