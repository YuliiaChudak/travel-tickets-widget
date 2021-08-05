import { createSlice } from '@reduxjs/toolkit';

import { SlotWidget } from '../../shared/types/SlotWidget';
import { loadAllSlotWidgets, FEATURE_NAME } from './slot-widgets-thunks';

export interface SlotWidgetsState {
  slots: SlotWidget[];
  isFetching: boolean;
  error: string | null;
}

export const initialState: SlotWidgetsState = {
  slots: [],
  isFetching: false,
  error: null,
};

const { reducer } = createSlice({
  name: FEATURE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllSlotWidgets.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(loadAllSlotWidgets.fulfilled, (state, action) => {
      state.isFetching = false;
      state.slots = action.payload;
    });

    builder.addCase(loadAllSlotWidgets.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error?.message || 'Failed to load slot widgets';
    });
  },
});

export default reducer;
