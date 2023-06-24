import { useDispatch } from 'react-redux';

import { store } from 'store/configureStore';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
