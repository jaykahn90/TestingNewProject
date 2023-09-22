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

    //   it('fetches and displays user data correctly', async () => {
    //     fetch.mockResolvedValueOnce({
    //       json: async () => [
    //         {
    //           id: '1',
    //           image:
    //             'https://images.pexels.com/photos/851238/pexels-photo-851238.jpeg?auto=compress&cs=tinysrgb&w=1600',
    //           name: 'iSeek',
    //           email: 'iSeekBlinds@abc.com',
    //           mobile: '1234567899',
    //         },
    //       ],
    //     });

    //const {findByText} = render(<HookEffect />);

    render(<HookEffect />);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 3500));
    });

    expect(Alert.alert).toHaveBeenCalledWith(
      "It's taking too long!",
      'Please try again.',
    );

    // const nameElement = await findByText('Name: iSeekBlinds');
    // expect(nameElement).toBeTruthy();

    // const emailElement = await findByText('Email: iSeekBlinds@abc.com');
    // expect(emailElement).toBeTruthy();

    // const mobileElement = await findByText('Phone: 1234567899');
    // expect(mobileElement).toBeTruthy();
  });
});
