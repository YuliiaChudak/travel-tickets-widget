import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFareDataById } from './fares-selectors';
import { RootState } from '../../store';
import { getFareById } from './fares-api';

export const FEATURE_NAME = 'fares';

export const loadFareById = createAsyncThunk(
  `${FEATURE_NAME}/loadFareById`,
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
