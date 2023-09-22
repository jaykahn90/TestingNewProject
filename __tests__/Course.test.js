import React from 'react';
import {render} from '@testing-library/react-native';
import Course from '../src/screens/Course';

// Mock Lottie
jest.mock('lottie-react-native', () => 'Lottie');

describe('<Course />', () => {
  it('renders the Lottie gif and the text', () => {
    const {getByText, getByTestId} = render(<Course />);

    // Check if the gif is rendered
    expect(getByTestId('lottie-gif')).toBeTruthy();

    // Check if the text is rendered
    expect(getByText('Testing Gifs')).toBeTruthy();
  });
});
