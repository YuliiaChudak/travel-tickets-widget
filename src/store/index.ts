import { configureStore } from '@reduxjs/toolkit';

import slotWidgetsReducer from '../features/slot-widgets/slotWidgetsReducer';
import faresReducer from '../features/fares/faresReducer';

export const store = configureStore({
  reducer: {
    slotWidgets: slotWidgetsReducer,
    fares: faresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
