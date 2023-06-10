import { combineReducers } from 'redux';

import game from './Game/reducer';

const rootReducer = combineReducers({
  game,
});

export default rootReducer;
