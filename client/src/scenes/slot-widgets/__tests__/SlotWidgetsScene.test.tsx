import React from 'react';
import { screen } from '@testing-library/dom';
import { configureStore } from '@reduxjs/toolkit';
import { renderWithTheme } from '../../../tests/helpers';
import { Provider } from 'react-redux';
import SlotWidgetsScene from '../SlotWidgetsScene';
import slotWidgetsFixture from '../../../features/slot-widgets/__fixtures__/slot-widgets-get-success.json';

describe('SlotWidgetsScene', () => {
  it('shows loader if loading slot widgets', () => {
    const store = configureStore({
      reducer: {
        slotWidgets: () => ({ isFetching: true, error: null, slots: [] }),
      },
    });

    renderWithTheme(
      <Provider store={store}>
        <SlotWidgetsScene />
      </Provider>
    );

    const loaders = screen.getAllByTestId('slot-widget-loader');
    expect(loaders).toHaveLength(3);
  });

  it('shows error if failed to load widgets', () => {
    const error = 'Not found!';
    const store = configureStore({
      reducer: {
        slotWidgets: () => ({ isFetching: false, error, slots: [] }),
      },
    });

    renderWithTheme(
      <Provider store={store}>
        <SlotWidgetsScene />
      </Provider>
    );

    expect(
      screen.queryByText(`Error ${error} occurred. We'll get back to you soon!`)
    ).toBeInTheDocument();
  });

  it('shows widgets', () => {
    const store = configureStore({
      reducer: {
        slotWidgets: () => ({
          isFetching: false,
          error: null,
          slots: slotWidgetsFixture['slot-widgets'],
        }),
        fares: () => ({ data: {} }),
      },
    });

    renderWithTheme(
      <Provider store={store}>
        <SlotWidgetsScene />
      </Provider>
    );

    slotWidgetsFixture['slot-widgets'].forEach((slotWidget) => {
      expect(screen.queryByText(slotWidget.bigTitle)).toBeInTheDocument();
      expect(screen.queryByText(slotWidget.smallTitle)).toBeInTheDocument();
    });
  });
});
