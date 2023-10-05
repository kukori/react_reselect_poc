import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types';

interface ItemSlice {
  items: Item[];
}

const initialState: ItemSlice = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<Item[]>) => {
      state.items = payload;
    },
  },
});

export const { setItems } = itemSlice.actions;

export const itemReducer = itemSlice.reducer;
