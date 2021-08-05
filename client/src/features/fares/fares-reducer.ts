import { createSlice } from '@reduxjs/toolkit';
import { Fare } from '../../shared/types/Fare';
import { loadFareById, FEATURE_NAME } from './fares-thunks';

type FareDataSlice = {
  isFetching: boolean;
  fare?: Fare;
  error?: string;
};

export interface FaresState {
  data: Record<string, FareDataSlice>;
}

const initialState: FaresState = {
  data: {},
};

const { reducer } = createSlice({
  name: FEATURE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFareById.pending, (state, action) => {
      state.data[action.meta.arg] = {
        isFetching: true,
      };
    });

    builder.addCase(loadFareById.fulfilled, (state, action) => {
      state.data[action.meta.arg] = {
        isFetching: false,
        fare: action.payload,
      };
    });

    builder.addCase(loadFareById.rejected, (state, action) => {
      state.data[action.meta.arg] = {
        isFetching: false,
        error:
          action.error.message ||
          `Failed to load fare with ${action.meta.arg} id`,
      };
    });
  },
});

export default reducer;
