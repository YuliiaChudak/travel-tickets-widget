import { api } from '../../shared/services/api';
import { SlotWidget } from '../../shared/types/SlotWidget';

type GetAllSlotWidgetsResponse = {
  'slot-widgets': SlotWidget[];
};

export const getAllSlotWidgets = () =>
  api.get<GetAllSlotWidgetsResponse>('/slot-widgets');
