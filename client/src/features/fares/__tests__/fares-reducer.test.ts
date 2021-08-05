import reducer, { initialState } from '../fares-reducer';
import { loadFareById } from '../fares-thunks';
import fare from '../__fixtures__/fare-get-success.json';
import { Simulate } from 'react-dom/test-utils';

describe('Fares reducer', () => {
  const fareId = '1';
  it(`handles ${loadFareById.pending} action`, () => {
    const action = { type: loadFareById.pending, meta: { arg: fareId } };
    const state = reducer(initialState, action);

    expect(state.data[fareId].isFetching).toBeTruthy();
  });

  it(`handles ${loadFareById.fulfilled} action`, () => {
    const action = {
      type: loadFareById.fulfilled,
      meta: { arg: fareId },
      payload: fare,
    };
    const state = reducer(
      {
        ...initialState,
        data: {
          [fareId]: { isFetching: true },
        },
      },
      action
    );

    expect(state.data[fareId].isFetching).toBeFalsy();
    expect(state.data[fareId].fare).toEqual(fare);
  });

  it(`handles ${loadFareById.rejected} action`, () => {
    const action = {
      type: loadFareById.rejected,
      meta: { arg: fareId },
      error: { message: 'Not found' },
    };
    const state = reducer(
      {
        ...initialState,
        data: {
          [fareId]: { isFetching: true },
        },
      },
      action
    );

    expect(state.data[fareId].isFetching).toBeFalsy();
    expect(state.data[fareId].error).toEqual(action.error.message);
  });

  it(`handles ${loadFareById.rejected} action with default error`, () => {
    const action = {
      type: loadFareById.rejected,
      meta: { arg: fareId },
    };
    const state = reducer(
      {
        ...initialState,
        data: {
          [fareId]: { isFetching: true },
        },
      },
      action
    );

    expect(state.data[fareId].isFetching).toBeFalsy();
    expect(state.data[fareId].error).toMatchInlineSnapshot(
      `"Failed to load fare with 1 id"`
    );
  });
});
