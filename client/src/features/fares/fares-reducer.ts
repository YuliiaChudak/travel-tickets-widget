import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Fare } from '../../shared/types/Fare';
import { getFareById } from './fares-api';
import { getFareDataById } from './fares-selectors';
import { RootState } from '../../store';

const REDUCER_NAME = 'fares';

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

export const loadFareById = createAsyncThunk(
  `${REDUCER_NAME}/loadFareById`,
  async (fareId: string, thunkAPI) => {
    const isStoredFare = getFareDataById(fareId)(
      thunkAPI.getState() as RootState
    );

    if (isStoredFare) {
      return;
    }

    const response = await getFareById(fareId);
    return response.data.fare;
  }
);

const { reducer } = createSlice({
  name: REDUCER_NAME,
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
