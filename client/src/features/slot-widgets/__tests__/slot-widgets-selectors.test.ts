import {
  getSlotWidgets,
  getSlotWidgetsError,
  isFetchingSlotWidgets,
} from '../slot-widgets-selectors';
import { initialState, SlotWidgetsState } from '../slot-widgets-reducer';
import { RootState } from '../../../store';
import slotWidgetsFixture from '../__fixtures__/slot-widgets-get-success.json';

const getMockedStoreValue = (data: Partial<SlotWidgetsState> = {}): RootState =>
  ({
    slotWidgets: {
      ...initialState,
      ...data,
    },
  } as RootState);

describe('Slot widgets selectors', () => {
  describe('getSlotWidgets', () => {
    it('returns an empty array', () => {
      expect(getSlotWidgets(getMockedStoreValue())).toEqual([]);
    });

    it('returns store slot widgets', () => {
      expect(
        getSlotWidgets(
          getMockedStoreValue({ slots: slotWidgetsFixture['slot-widgets'] })
        )
      ).toEqual(slotWidgetsFixture['slot-widgets']);
    });
  });

  describe('getSlotWidgetsError', () => {
    it('returns null', () => {
      expect(getSlotWidgetsError(getMockedStoreValue())).toBeNull();
    });

    it('returns error message', () => {
      const error = 'Test';
      expect(getSlotWidgetsError(getMockedStoreValue({ error }))).toEqual(
        error
      );
    });
  });

  describe('isFetchingSlotWidgets', () => {
    it('returns false', () => {
      expect(isFetchingSlotWidgets(getMockedStoreValue())).toBeFalsy();
    });

    it('returns true', () => {
      expect(
        isFetchingSlotWidgets(getMockedStoreValue({ isFetching: true }))
      ).toBeTruthy();
    });
  });
});
