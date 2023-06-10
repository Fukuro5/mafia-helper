import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const createStore = (options) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
  ...options,
});

export default createStore;
