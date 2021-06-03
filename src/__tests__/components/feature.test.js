import React from 'react';
import { getByText, render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('renders the <Feature /> with populated data', () => {
    // eslint-disable-next-line no-shadow
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>영화, TV 프로그램을 무제한으로.</Feature.Title>
        <Feature.SubTitle>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</Feature.SubTitle>
      </Feature>
    );
    expect(getByText('영화, TV 프로그램을 무제한으로.')).toBeTruthy();
    expect(getByText('다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with just a title', () => {
    // eslint-disable-next-line no-shadow
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.Title>영화, TV 프로그램을 무제한으로.</Feature.Title>
      </Feature>
    );
    expect(getByText('영화, TV 프로그램을 무제한으로.')).toBeTruthy();
    expect(queryByText('다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with just a sub-title', () => {
    // eslint-disable-next-line no-shadow
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.SubTitle>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</Feature.SubTitle>
      </Feature>
    );
    expect(getByText('다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.')).toBeTruthy();
    expect(queryByText('영화, TV 프로그램을 무제한으로.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
