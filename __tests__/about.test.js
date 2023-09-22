import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import About from '../src/screens/About';
import {Linking} from 'react-native';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

describe('<About />', () => {
  beforeEach(() => {
    Linking.openURL.mockClear();
  });

  it('opens YouTube URL when YouTube icon is pressed', () => {
    const {getByTestId} = render(<About />);
    fireEvent.press(getByTestId('youtube-button'));
    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://www.youtube.com/@RolleaseAcmeda',
    );
  });

  it('opens Instagram URL when Instagram icon is pressed', () => {
    const {getByTestId} = render(<About />);
    fireEvent.press(getByTestId('instagram-button'));
    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://www.instagram.com/rolleaseacmeda/',
    );
  });

  it('opens Facebook URL when Facebook icon is pressed', () => {
    const {getByTestId} = render(<About />);
    fireEvent.press(getByTestId('facebook-button'));
    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://www.facebook.com/rolleaseacmeda/',
    );
  });
});
