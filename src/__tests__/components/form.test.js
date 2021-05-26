import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
  it('renders the <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>지금 로그인</Form.Title>

        <Form.Base>
          <Form.Input placeholder="이메일 주소 또는 전화번호" onChange={() => {}} />
          <Form.Input type="password" placeholder="비밀번호" onChange={() => {}} />
          <Form.Submit type="submit" disabled>
            로그인
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          Netflix 회원이 아닌가요?
          {/* <Form.Link to="/signup">지금 가입하세요.</Form.Link> */}
        </Form.Text>
        <Form.TextSmall>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 자세히 알아보기
        </Form.TextSmall>
      </Form>
    );
  });

  it('renders the <Form /> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText('Your email address is already being used')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
