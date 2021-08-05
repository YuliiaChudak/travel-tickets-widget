import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { SlotWidget } from '../../shared/types/SlotWidget';
import { getAllSlotWidgets } from './slotWidgetsApi';

const REDUCER_NAME = 'slotWidgets';

export interface SlotWidgetsState {
  slots: SlotWidget[];
  isFetching: boolean;
  error: string | null;
}

const initialState: SlotWidgetsState = {
  slots: [],
  isFetching: false,
  error: null,
};

export const loadAllSlotWidgets = createAsyncThunk<SlotWidget[]>(
  `${REDUCER_NAME}/loadAllSlotWidgets`,
  async () => {
    const response = await getAllSlotWidgets();

    return response.data['slot-widgets'];
  }
);

const { reducer } = createSlice({
  name: REDUCER_NAME,
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
      state.error = action.error.message || 'Failed to load slot widgets';
    });
  },
});

export default reducer;
