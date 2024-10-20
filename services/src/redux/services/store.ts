import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import authSlice from '../features/auth/authSlice';
import sampleSlice from '../features/sample/sampleSlice';
import { sampleApi } from '../features/sample/sampleApi';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  sampleSlice: sampleSlice,
  [sampleApi.reducerPath]: sampleApi.reducer,
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
