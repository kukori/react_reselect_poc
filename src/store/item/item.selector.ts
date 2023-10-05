import { State } from "./../store";
import { createSelector } from "@reduxjs/toolkit";

const items = (state: State) => state.item.items;
const showEnabledOnly = (state: State) => state.app.showEnabledOnly;
const showOwnItemOnly = (state: State) => state.app.showOwnItemOnly;
const userId = (state: State) => state.user.user?.id;
const shownItemTypes = (state: State) => state.app.shownItemTypes;


export const enabledItems = createSelector([items, showEnabledOnly], (items, showEnabledOnly) => {
    if(!showEnabledOnly) {
        return items;
    }

  return items.filter((item) => item.isEnabled);
});

export const ownItems = createSelector([enabledItems, showOwnItemOnly, userId], (items, showOwnItemOnly, userId) => {
    if(!showOwnItemOnly || !userId) {
        return items;
    }

  return items.filter((item) => item.owner === userId);
});

export const filteredItems = createSelector([ownItems, shownItemTypes], (items, shownItemTypes) => {
    if(!shownItemTypes.length) {
        return items;
    }

  return items.filter((item) => shownItemTypes.includes(item.type));
});
