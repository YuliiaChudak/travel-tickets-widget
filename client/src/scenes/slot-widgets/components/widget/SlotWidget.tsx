import React, { useEffect } from 'react';

import { Box } from '../../../../shared/components/box/Box.styles';
import { SlotWidget as SlotWidgetType } from '../../../../shared/types/SlotWidget';
import { loadFareById } from '../../../../features/fares/fares-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFareDataById,
  getFareErrorById,
  isFareFetchingById,
} from '../../../../features/fares/fares-selectors';
import { RootState } from '../../../../store';
import { Details, Information, Name, DetailsError } from './SlotWidget.styles';
import { H4, H3 } from '../../../../shared/components/heading/Heading.styles';
import Price from './components/Price';
import TravelRoutes from './components/TravelRoutes';

type Props = {
  widget: SlotWidgetType;
};

const SlotWidget = ({ widget }: Props) => {
  const dispatch = useDispatch();
  const fare = useSelector((state) =>
    getFareDataById(widget.fareId)(state as RootState)
  );
  const isFetchingFare = useSelector((state) =>
    isFareFetchingById(widget.fareId)(state as RootState)
  );
  const fareFetchingError = useSelector((state) =>
    getFareErrorById(widget.fareId)(state as RootState)
  );

  console.log(fare, isFetchingFare, fareFetchingError);

  useEffect(() => {
    dispatch(loadFareById(widget.fareId));
  }, [widget.fareId]);

  return (
    <Box>
      <Information bg={widget.image}>
        <Name>
          <H4>{widget.smallTitle}</H4>
          <H3>{widget.bigTitle}</H3>
        </Name>
        <Price fare={fare} isFetching={isFetchingFare} />
      </Information>
      <Details>
        <TravelRoutes fare={fare} isFetching={isFetchingFare} />
        {fareFetchingError && (
          <DetailsError>
            Details for this widget are temporary unavailable.
          </DetailsError>
        )}
      </Details>
    </Box>
  );
};

export default SlotWidget;
