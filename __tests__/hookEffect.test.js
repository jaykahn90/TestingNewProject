import React from 'react';
import {render, act} from '@testing-library/react-native';
import HookEffect from '../src/screens/HookEffect';
import {Alert} from 'react-native';

jest.mock('react-native', () => {
  const RealModule = jest.requireActual('react-native');
  RealModule.Alert.alert = jest.fn();
  return RealModule;
});

global.fetch = jest.fn();

describe('<HookEffect />', () => {
  beforeEach(() => {
    // fetch.mockClear();
    Alert.alert.mockClear();
  });

  it('shows an alert if fetching takes over 4 seconds', async () => {
    // Simulate a delay of 5 seconds
    fetch.mockImplementationOnce(
      () => new Promise(resolve => setTimeout(() => resolve(), 3000)),
    );

    render(<HookEffect />);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 3500));
    });

    expect(Alert.alert).toHaveBeenCalledWith(
      "It's taking too long!",
      'Please try again.',
    );
  });
});
