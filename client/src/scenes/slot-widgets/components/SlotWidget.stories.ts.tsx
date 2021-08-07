import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import SlotWidget from './SlotWidget';

export default {
  title: 'Scenes/SlotWidgets/SlotWidget',
  component: SlotWidget,
} as ComponentMeta<typeof SlotWidget>;

const Container = styled.div`
  width: 450px;
  margin: 40px;
`;

const widget = {
  bigTitle: 'Spain-1',
  smallTitle: 'Sandy beaches and delicious food',
  image:
    'https://s1.travix.com/eu/europe-spain-mallorca-cala-gat-beach-small.jpg',
  fareId: '1',
};

const fare = {
  airlineName: 'Ryanair',
  departureDate: '2021-06-22T11:00:00+00:00',
  returnDate: '2021-06-24T11:25:00+00:00',
  price: 16,
  time: 'Found 1 hour ago',
  departure: {
    airportName: 'Borispil',
    cityName: 'Kiyv',
  },
  destination: {
    airportName: 'Costa Dorada',
    cityName: 'Barcelona',
  },
};

const createComponentWithData = (data: any) => {
  const store = configureStore({
    reducer: {
      fares: () => ({ data: { [widget.fareId]: data } }),
    },
  });

  return () => (
    <Provider store={store}>
      <Container>
        <SlotWidget widget={widget} />
      </Container>
    </Provider>
  );
};

export const WithLoadingData = createComponentWithData({ isFetching: true });
export const WithLoadedData = createComponentWithData({
  isFetching: false,
  fare,
});
export const WithError = createComponentWithData({
  isFetching: false,
  error: 'Not found!',
});
