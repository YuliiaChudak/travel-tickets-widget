import { api } from '../../shared/services/api';
import { Fare } from '../../shared/types/Fare';

type GetFareByIdResponse = {
  fare: Fare;
};

export const getFareById = (id: string) =>
  api.get<GetFareByIdResponse>(`/fares/${id}`);
