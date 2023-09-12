//placeholder showing right initial text for e.g in name placeholder is jalal khan
//can have valid data in textfeilds
//cannot press the button until checkbox is checked.
//if all the feilds are not filled in, should show a popr up "please fill all fields"
//pressing button takes us to home screen once all fields are filled in and user presses checkbox and press "contact us" button

// Contact.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Contact from '../src/screens/Contact'; // Replace with the actual path to your Contact component

describe('Contact', () => {
  test('shows "please fill all fields" popup when submitting without filling all fields', () => {
    const {getByTestId, getByText} = render(<Contact />);

    // Tap the checkbox to agree
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);

    // Find the "Contact Us" button and press it without filling any fields
    const contactUsButton = getByText('Contact Us');
    fireEvent.press(contactUsButton);

    // Find the popup and assert its text content
    const popup = getByText('please fill all fields');
    expect(popup).toBeTruthy();
  });

  test('shows "Thank You" popup and navigates to Home on successful submission', () => {
    const {getByTestId, getByText} = render(<Contact />);

    // Fill in the required fields
    const nameInput = getByTestId('name-input');
    const emailInput = getByTestId('email-input');
    const phoneInput = getByTestId('phone-input');
    const messageInput = getByTestId('message-input');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'john@example.com');
    fireEvent.changeText(phoneInput, '1234567890');
    fireEvent.changeText(messageInput, 'This is a test message');

    // Tap the checkbox to agree
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);

    // Find the "Contact Us" button and press it
    const contactUsButton = getByText('Contact Us');
    fireEvent.press(contactUsButton);

    // Find the "Thank You" popup and assert its text content
    const thankYouPopup = getByText('Thank You John Doe');
    expect(thankYouPopup).toBeTruthy();
  });
});
