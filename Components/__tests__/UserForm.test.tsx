import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserForm from '../UserForm';

describe('UserForm', () => {
  it('should update contactInfo when input values change', () => {
    const { getByPlaceholderText } = render(<UserForm />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const phoneInput = getByPlaceholderText('Phone Number');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'johndoe@example.com');
    fireEvent.changeText(phoneInput, '1234567890');

    expect(nameInput.props.value).toBe('John Doe');
    expect(emailInput.props.value).toBe('johndoe@example.com');
    expect(phoneInput.props.value).toBe('1234567890');
  });

  it('should disable the button if input values are empty', () => {
    const { getByText } = render(<UserForm />);
    const button = getByText('Start test');

    expect(button.props.disabled).toBe(true);
  });

  it('should enable the button if input values are not empty', () => {
    const { getByPlaceholderText, getByText } = render(<UserForm />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const phoneInput = getByPlaceholderText('Phone Number');
    const button = getByText('Start test');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'johndoe@example.com');
    fireEvent.changeText(phoneInput, '1234567890');

    expect(button.props.disabled).toBe(false);
  });

  it('should navigate to JavaScript screen when language is JavaScript', () => {
    const { getByPlaceholderText, getByText, navigate } = render(<UserForm />);
    const languagePicker = getByPlaceholderText('Selected Language');
    const button = getByText('Start test');

    fireEvent.changeText(languagePicker, 'JavaScript');
    fireEvent.press(button);

    expect(navigate).toHaveBeenCalledWith('/JavaScript', {
      state: {
        contactInfo: {
          language: 'JavaScript',
          name: '',
          email: '',
          phoneNumber: '',
        },
      },
    });
  });
  
});


describe("<LoginForm />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    // ???
  });
});
