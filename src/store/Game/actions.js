import { ADD_PLAYER_ON_VOTE, CHANGE_PLAYERS, CHANGE_VOTED_PLAYERS, RESET_VOTED_PLAYERS, SET_COUNT_OF_PLAYERS } from './types';

export const addPlayerOnVote = (player) => ({
  type: ADD_PLAYER_ON_VOTE,
  player,
});

export const setCountOfPlayers = (countOfPlayers) => ({
  type: SET_COUNT_OF_PLAYERS,
  countOfPlayers,
  players: [...Array(+countOfPlayers)].map(() => ({ name: '', role: '', isNominated: false })),
});

export const changePlayers = (players) => ({
  type: CHANGE_PLAYERS,
  players,
});

export const removePlayer = (playerName) => (dispatch, getState) => {
  const { game: { players } } = getState();
  const newPlayers = players.filter(({ name }) => name !== playerName);
  dispatch(changePlayers(newPlayers));
};

export const changeVotedPlayers = (voted) => ({
  type: CHANGE_VOTED_PLAYERS,
  voted,
});

export const addVotes = (playerName, votes) => (dispatch, getState) => {
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
  type: RESET_VOTED_PLAYERS,
});
