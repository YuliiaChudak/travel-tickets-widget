import reducer, { initialState } from '../slot-widgets-reducer';
import { loadAllSlotWidgets } from '../slot-widgets-thunks';
import slotWidgets from '../__fixtures__/slot-widgets-get-success.json';

describe('Slot widgets reducer', () => {
  it(`handles ${loadAllSlotWidgets.pending} action`, () => {
    const action = { type: loadAllSlotWidgets.pending };
    const state = reducer(initialState, action);

    expect(state.isFetching).toBeTruthy();
  });

  it(`handles ${loadAllSlotWidgets.pending} action if error exists`, () => {
    const action = { type: loadAllSlotWidgets.pending };
    const state = reducer({ ...initialState, error: 'Some error' }, action);

    expect(state.error).toBeNull();
    expect(state.isFetching).toBeTruthy();
  });

  it(`handles ${loadAllSlotWidgets.fulfilled} action`, () => {
    const action = {
      type: loadAllSlotWidgets.fulfilled,
      payload: slotWidgets,
    };
    const state = reducer({ ...initialState, isFetching: true }, action);

    expect(state.isFetching).toBeFalsy();
    expect(state.slots).toEqual(action.payload);
  });

  it(`handles ${loadAllSlotWidgets.rejected} action`, () => {
    const action = {
      type: loadAllSlotWidgets.rejected,
      error: { message: 'Not found' },
    };
    const state = reducer({ ...initialState, isFetching: true }, action);

    expect(state.isFetching).toBeFalsy();
    expect(state.error).toEqual(action.error.message);
  });

  it(`handles ${loadAllSlotWidgets.rejected} action with default error`, () => {
    const action = {
      type: loadAllSlotWidgets.rejected,
    };
    const state = reducer({ ...initialState, isFetching: true }, action);

    expect(state.isFetching).toBeFalsy();
    expect(state.error).toMatchInlineSnapshot(`"Failed to load slot widgets"`);
  });
});
