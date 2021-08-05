import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadAllSlotWidgets } from '../../features/slot-widgets/slot-widgets-thunks';
import {
  getSlotWidgets,
  getSlotWidgetsError,
  isFetchingSlotWidgets,
} from '../../features/slot-widgets/slotWidgetsSelectors';
import { Grid } from '../../shared/components/grid/Grid.styles';
import { Placeholder } from '../../shared/components/placeholder/Placeholder.styles';
import SlotWidget from './components/widget/SlotWidget';
import { Container, Error } from './SlotWidgetsScene.styles';

const SlotWidgetScene = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(isFetchingSlotWidgets);
  const error = useSelector(getSlotWidgetsError);
  const slotWidgets = useSelector(getSlotWidgets);

  useEffect(() => {
    dispatch(loadAllSlotWidgets());
  }, []);

  if (isFetching) {
    return (
      <Container>
        <Grid>
          {Array(3)
            .fill(null)
            .map((_, id) => (
              <Placeholder key={id} width="auto" height="300px" br="10px" />
            ))}
        </Grid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Error>Error {error} occurred. We'll get back to you soon!</Error>
      </Container>
    );
  }

  return (
    <Container>
      <Grid>
        {slotWidgets.map((widget, id) => (
          <SlotWidget key={id} widget={widget} />
        ))}
      </Grid>
    </Container>
  );
};

export default SlotWidgetScene;
