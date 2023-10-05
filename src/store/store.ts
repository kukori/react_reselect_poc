import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/app.slice';
import { userReducer } from './user/user.slice';
import { itemReducer } from './item/item.slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    item: itemReducer,
    user: userReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
