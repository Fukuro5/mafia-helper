import { GAME_ACTIONS } from './consts';

export type TGameActions =
  (typeof GAME_ACTIONS)[keyof typeof GAME_ACTIONS];

export interface IPlayer {
  name: string;
  role: string;
  isNominated: boolean;
}

export interface IVotedPlayer {
  name: string;
  votes: number;
}

export type TCountOfPlayers = number;

export interface IGameState {
  countOfPlayers: TCountOfPlayers;
  players: IPlayer[];
  killed: string;
  voted: IVotedPlayer[];
}

export type IRootGameState = {
  game: IGameState;
};


export type IGameReducer = (
  state: IGameState,
  action: {
    type: TGameActions;
    data?: null;
    error?: unknown;
    countOfPlayers?: number;
    players?: IPlayer[];
    player?: IPlayer;
    voted?: IVotedPlayer[];
    playerName?: string;
    votes?: number;
  },
) => void;
