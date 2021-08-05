import { configureStore } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as apiHandlers from '../fares-api';
import { loadFareById } from '../fares-thunks';
import reducer from '../fares-reducer';
import fareFixture from '../__fixtures__/fare-get-success.json';

describe('Fare thunk', () => {
  describe('loadFareById', () => {
    const fareId = '1';

    it('do not call api if fare is already loaded', async () => {
      const response = { data: { fare: fareFixture } } as AxiosResponse<any>;
      const getFareById = jest
        .spyOn(apiHandlers, 'getFareById')
        .mockResolvedValueOnce(response);
      const store = configureStore({
        reducer: {
          fares: () => ({ data: { [fareId]: { fare: fareFixture } } }),
        },
      });
      await store.dispatch(loadFareById(fareId));

      expect(getFareById).not.toHaveBeenCalled();
    });

    it('calls an api and fulfill action', async () => {
      const response = { data: { fare: fareFixture } } as AxiosResponse<any>;
      const getFareById = jest
        .spyOn(apiHandlers, 'getFareById')
        .mockResolvedValueOnce(response);
      const store = configureStore({
        reducer: {
          fares: reducer,
        },
      });
      await store.dispatch(loadFareById(fareId));

      expect(getFareById).toHaveBeenCalledWith(fareId);
      expect(store.getState().fares.data[fareId].fare).toEqual(fareFixture);
    });

    it('calls an api and reject action', async () => {
      const error = new Error('Network error!');
      const getFareById = jest
        .spyOn(apiHandlers, 'getFareById')
        .mockRejectedValueOnce(error);
      const store = configureStore({
        reducer: {
          fares: reducer,
        },
      });
      await store.dispatch(loadFareById(fareId));

      expect(getFareById).toHaveBeenCalledWith(fareId);
      expect(store.getState().fares.data[fareId].error).toEqual(error.message);
    });
  });
});
