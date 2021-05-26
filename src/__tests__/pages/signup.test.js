import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignUp } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
    ),
  })),
};

describe('<SignUp />', () => {
  it('renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('이름'), { target: { value: 'Karl' } });
      await fireEvent.change(getByPlaceholderText('이메일 주소 또는 전화번호'), {
        target: { value: 'karl@gmail.com' },
      });
      await fireEvent.change(getByPlaceholderText('비밀번호'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-up'));

      expect(getByPlaceholderText('이메일 주소 또는 전화번호').value).toBe('karl@gmail.com');
      expect(getByPlaceholderText('비밀번호').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
