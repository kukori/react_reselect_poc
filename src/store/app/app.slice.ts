import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemType } from '../../types';

interface AppSlice {
  showEnabledOnly: boolean;
  showOwnItemOnly: boolean;
  shownItemTypes: ItemType[]; 
}

const initialState: AppSlice = {
  showEnabledOnly: false,
  showOwnItemOnly: false,
  shownItemTypes: [ItemType.PRIVATE, ItemType.PUBLIC],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowEnabledOnly: (state, { payload }: PayloadAction<boolean>) => {
      state.showEnabledOnly = payload;
    },
    setShowOwnItemOnly: (state, { payload }: PayloadAction<boolean>) => {
      state.showOwnItemOnly = payload;
    },
    setShownItemTypes: (state, { payload }: PayloadAction<ItemType[]>) => {
      state.shownItemTypes = payload;
    },
  },
});

export const { setShowEnabledOnly, setShowOwnItemOnly, setShownItemTypes } = appSlice.actions;

export const appReducer = appSlice.reducer;
