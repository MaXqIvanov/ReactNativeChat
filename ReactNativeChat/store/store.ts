import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './usersSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  users: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});