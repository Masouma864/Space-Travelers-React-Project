import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsPage from '../pages/RocketsPage';
import fetchRockets, { reserve, cancleRes } from '../redux/rockets/rockets';

describe('Rocket page test', () => {
  test('rocket page rendered correctly', () => {
    const page = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  test('Fetch rocket data', async () => {
    await store.dispatch(fetchRockets());
    expect(store.getState().rockets.length).toEqual(4);
  });

  test('Reserve rocket', () => {
    store.dispatch(reserve(1));
    expect(store.getState().rockets[0].reserved).toBe(true);
  });

  test('Cancle reservations', () => {
    store.dispatch(cancleRes(1));
    expect(store.getState().rockets[0].reserved).toBe(false);
  });
});
