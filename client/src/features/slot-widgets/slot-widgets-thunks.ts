import { createAsyncThunk } from '@reduxjs/toolkit';

import { SlotWidget } from '../../shared/types/SlotWidget';
import { getAllSlotWidgets } from './slot-widgets-api';

export const FEATURE_NAME = 'slotWidgets';

export const loadAllSlotWidgets = createAsyncThunk<SlotWidget[]>(
  `${FEATURE_NAME}/loadAllSlotWidgets`,
  async () => {
    const response = await getAllSlotWidgets();

    return response.data['slot-widgets'];
  }
);
