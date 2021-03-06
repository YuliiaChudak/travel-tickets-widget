import { configureStore } from '@reduxjs/toolkit';

import slotWidgetsReducer from '../features/slot-widgets/slot-widgets-reducer';
import faresReducer from '../features/fares/fares-reducer';

export const store = configureStore({
  reducer: {
    slotWidgets: slotWidgetsReducer,
    fares: faresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
