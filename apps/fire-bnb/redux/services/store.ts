import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import {
  authSlice,
  loginFormSlice,
  searchParamsSlice,
  unsavedChangesSlice,
} from '@nx-next-js-micro/services';

import reservationFormSlice from '../feature/reservation/reservationFormSlice';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  loginFormSlice,
  searchParamsSlice,
  unsavedChangesSlice,
  reservationFormSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PERSIST',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat([]),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
