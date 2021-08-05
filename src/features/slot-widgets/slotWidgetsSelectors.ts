import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

const slotWidgetsAccessor = (state: RootState) => state.slotWidgets.slots;

export const getSlotWidgets = createSelector(
  slotWidgetsAccessor,
  (slots) => slots
);
export const isFetchingSlotWidgets = (state: RootState) =>
  state.slotWidgets.isFetching;
export const getSlotWidgetsError = (state: RootState) =>
  state.slotWidgets.error;
