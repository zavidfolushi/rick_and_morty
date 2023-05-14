import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { rickandmortyApi } from './rickandmorty/rickandmorty.api';
import charactersSlice from './rickandmorty/charactersSlice';
import episodesSlice from './rickandmorty/episodesSlice';

export const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer, //Для демонстрації частину зробив через RTK Query
    charactersSlice, // А ці через Toolkit
    episodesSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickandmortyApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

