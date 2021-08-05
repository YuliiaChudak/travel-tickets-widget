import { configureStore } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as apiHandlers from '../slot-widgets-api';
import slotWidgetsFixture from '../__fixtures__/slot-widgets-get-success.json';
import reducer from '../slot-widgets-reducer';
import { loadAllSlotWidgets } from '../slot-widgets-thunks';

describe('Slot widget thunk', () => {
  describe('loadAllSlotWidgets', () => {
    it('calls an api and fulfill action', async () => {
      const response = { data: slotWidgetsFixture } as AxiosResponse<any>;
      const getAllSlotWidgets = jest
        .spyOn(apiHandlers, 'getAllSlotWidgets')
        .mockResolvedValueOnce(response);

      const store = configureStore({ reducer });
      await store.dispatch(loadAllSlotWidgets());

      expect(getAllSlotWidgets).toHaveBeenCalledTimes(1);
      expect(store.getState().slots).toEqual(
        slotWidgetsFixture['slot-widgets']
      );
    });

    it('calls an api and rejects action', async () => {
      const error = new Error('Network error!');
      const getAllSlotWidgets = jest
        .spyOn(apiHandlers, 'getAllSlotWidgets')
        .mockRejectedValueOnce(error);

      const store = configureStore({ reducer });
      await store.dispatch(loadAllSlotWidgets());

      expect(getAllSlotWidgets).toHaveBeenCalledTimes(1);
      expect(store.getState().error).toEqual(error.message);
    });
  });
});
