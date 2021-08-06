import React from 'react';
import { screen } from '@testing-library/dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { renderWithTheme } from '../../../../tests/helpers';
import SlotWidget, { Props } from '../SlotWidget';
import fareFixture from '../../../../features/fares/__fixtures__/fare-get-success.json';

const getProps = (props: Partial<Props> = {}): Props => ({
  widget: {
    fareId: '1',
    bigTitle: 'Big title',
    smallTitle: 'Small title',
    image: 'https://example.com/image',
  },
  ...props,
});

describe('SlotWidget', function () {
  it('displays all widget information', () => {
    const props = getProps();
    const store = configureStore({
      reducer: {
        fares: () => ({
          data: {
            [props.widget.fareId]: { isFetching: false, fare: fareFixture },
          },
        }),
      },
    });

    renderWithTheme(
      <Provider store={store}>
        <SlotWidget {...props} />
      </Provider>
    );

    [
      fareFixture.price.toString(),
      fareFixture.departure.cityName,
      fareFixture.departure.airportName,
      fareFixture.destination.airportName,
      fareFixture.destination.cityName,
      fareFixture.time,
      fareFixture.airlineName,
    ].map((text) => {
      expect(screen.queryByText(new RegExp(text))).toBeInTheDocument();
    });

    const returnDateFormatted = screen.getByTestId('return-date');
    const departureDateFormatted = screen.getByTestId('departure-date');

    expect(returnDateFormatted.textContent).toMatchInlineSnapshot(
      `"• Jun 24."`
    );
    expect(departureDateFormatted.textContent).toMatchInlineSnapshot(
      `"• 22 Jun."`
    );
  });

  it('displays error message', () => {
    const props = getProps();
    const store = configureStore({
      reducer: {
        fares: () => ({
          data: {
            [props.widget.fareId]: { isFetching: false, error: 'Not found!' },
          },
        }),
      },
    });

    renderWithTheme(
      <Provider store={store}>
        <SlotWidget {...props} />
      </Provider>
    );

    expect(
      screen.queryByText('Details for this widget are temporary unavailable.')
    ).toBeInTheDocument();
  });

  it('displays loading when fetching fare', () => {
    const props = getProps();
    const store = configureStore({
      reducer: {
        fares: () => ({
          data: { [props.widget.fareId]: { isFetching: true } },
        }),
      },
    });

    renderWithTheme(
      <Provider store={store}>
        <SlotWidget {...props} />
      </Provider>
    );

    expect(screen.queryByText(props.widget.bigTitle)).toBeInTheDocument();
    expect(screen.queryByText(props.widget.smallTitle)).toBeInTheDocument();
    expect(screen.queryByTestId('routes-loader')).toBeInTheDocument();
    expect(screen.queryByTestId('price-loader')).toBeInTheDocument();
  });
});
