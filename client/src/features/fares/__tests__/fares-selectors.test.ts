import {
  getFareDataById,
  getFareErrorById,
  isFareFetchingById,
} from '../fares-selectors';
import { FaresState } from '../fares-reducer';
import { RootState } from '../../../store';
import faresFixture from '../__fixtures__/fare-get-success.json';

const getMockedStoreValue = (data: FaresState['data'] = {}): RootState =>
  ({
    fares: {
      data
    },
  } as RootState);

describe('Fares selectors', () => {
  const fareId = '1';

  describe('getFares', () => {
    it('returns an empty array', () => {
      expect(getFareDataById(fareId)(getMockedStoreValue())).toBeNull();
    });

    it('returns store fares', () => {
      expect(getFareDataById(fareId)(getMockedStoreValue({
        [fareId]: {
          isFetching: false,
          fare: faresFixture
        }
      }))).toEqual(faresFixture);
    });
  });

  describe('getFareErrorById', () => {
    it('returns null', () => {
      const invalidFareId = '10';

      expect(getFareErrorById(invalidFareId)(getMockedStoreValue())).toBeNull();
    });

    it('returns error message', () => {
      const error = 'Test';

      expect(getFareErrorById(fareId)(getMockedStoreValue( {
        [fareId]: {
          isFetching: false,
          error,
        }
      }))).toBeTruthy();
    });
  });

  describe('isFetchingSlotWidgets', () => {
    it('returns appropriate fare fetching value', () => {
      expect(isFareFetchingById(fareId)(getMockedStoreValue({
        [fareId]: {
          isFetching: true,
        }
      }))).toBeTruthy();
    });

    it('returns default fare fetching value', () => {
      expect(isFareFetchingById(fareId)(getMockedStoreValue())).toBeFalsy();
    });
  });
});
