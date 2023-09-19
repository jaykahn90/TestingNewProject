import React from 'react';
import {Alert} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import Contact from '../src/screens/Contact';

// Mock the Alert module to assert calls to it
jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.Alert.alert = jest.fn();
  return rn;
});

describe('<Contact />', () => {
  beforeEach(() => {
    // Clear all mock function calls before each test
    Alert.alert.mockClear();
  });

  it('should display an alert indicating the missing fields when some fields are not filled', () => {
    const {getByTestId} = render(
      <Contact navigation={{navigate: jest.fn()}} />,
    );

    // Let's say we only fill out the name field:
    fireEvent.changeText(getByTestId('name-input'), 'John');
    fireEvent.press(getByTestId('contact-button'));

    // We expect an alert with the missing fields (phone and message):
    expect(Alert.alert).toHaveBeenCalledWith(
      'Please fill the following fields: email, phone, message',
    );
  });

  it('should display "Thank You" with username when all fields are filled', () => {
    const {getByTestId} = render(
      <Contact navigation={{navigate: jest.fn()}} />,
    );

    fireEvent.changeText(getByTestId('name-input'), 'John');
    fireEvent.changeText(getByTestId('email-input'), 'john@example.com');
    fireEvent.changeText(getByTestId('phone-input'), '123-456-7890');
    fireEvent.changeText(getByTestId('message-input'), 'Hello, I need help!');

    fireEvent.press(getByTestId('contact-button'));

    expect(Alert.alert).toHaveBeenCalledWith('Thank You John');
  });
});
