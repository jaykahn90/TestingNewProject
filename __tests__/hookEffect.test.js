import React from 'react';
import {render} from '@testing-library/react-native';
import HookEffect from '../src/screens/HookEffect';

global.fetch = jest.fn();

describe('<HookEffect />', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetches and displays user data correctly', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: '1',
          image:
            'https://images.pexels.com/photos/851238/pexels-photo-851238.jpeg?auto=compress&cs=tinysrgb&w=1600',
          name: 'iSeekBlinds',
          email: 'iSeekBlinds@abc.com',
          mobile: '1234567899',
        },
      ],
    });

    const {findByText} = render(<HookEffect />);

    const nameElement = await findByText('Name: iSeekBlinds');
    expect(nameElement).toBeTruthy();

    const emailElement = await findByText('Email: iSeekBlinds@abc.com');
    expect(emailElement).toBeTruthy();

    const mobileElement = await findByText('Phone: 1234567899');
    expect(mobileElement).toBeTruthy();
  });
});
