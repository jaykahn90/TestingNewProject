import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Alert} from 'react-native';

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

  it('should display an alert "please fill all fields" when no fields are filled', () => {
    const {getByTestId} = render(
      <Contact navigation={{navigate: jest.fn()}} />,
    );

    const checkbox = getByTestId('checkbox');
    const contactButton = getByTestId('contact-button');

    fireEvent.press(checkbox);
    fireEvent.press(contactButton);

    expect(Alert.alert).toHaveBeenCalledWith('please fill all fields');
  });

  it('should display "Thank You" with username when all fields are filled', () => {
    const {getByTestId} = render(
      <Contact navigation={{navigate: jest.fn()}} />,
    );

    const nameInput = getByTestId('name-input');
    const emailInput = getByTestId('email-input');
    const phoneInput = getByTestId('phone-input');
    const messageInput = getByTestId('message-input');
    const checkbox = getByTestId('checkbox');
    const contactButton = getByTestId('contact-button');

    fireEvent.changeText(nameInput, 'Test User');
    fireEvent.changeText(emailInput, 'test@email.com');
    fireEvent.changeText(phoneInput, '123-456-7890');
    fireEvent.changeText(messageInput, 'Hello, this is a test message.');
    fireEvent.press(checkbox);
    fireEvent.press(contactButton);

    expect(Alert.alert).toHaveBeenCalledWith('Thank You Test User');
  });
});
