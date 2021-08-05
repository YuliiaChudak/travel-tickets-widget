import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

const faresAccessor = (state: RootState) => state.fares.data;

export const getFareDataById = (id: string) =>
  createSelector(faresAccessor, (data) => {
    return data[id]?.fare || null;
  });

export const getFareErrorById = (id: string) =>
  createSelector(faresAccessor, (data) => {
    return data[id]?.error || null;
  });

export const isFareFetchingById = (id: string) =>
  createSelector(faresAccessor, (data) => {
    return data[id]?.isFetching || false;
  });
