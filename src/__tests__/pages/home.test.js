import React from 'react';
import { fireEvent, getAllByAltText, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages';

test('renders the homepage', () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(
    <Router>
      <Home />
    </Router>
  );

  expect(getAllByPlaceholderText('이메일 주소')).toBeTruthy();

  expect(getByText('영화, TV 프로그램을 무제한으로.')).toBeTruthy();
  expect(getByText('다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.')).toBeTruthy();

  expect(getAllByText('시작하기')).toBeTruthy();
  expect(
    getAllByText('시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.')
  ).toBeTruthy();
});
