import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo';

describe('<Jumbotron />', () => {
  it('renders the <Jumbotron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText('TV로 즐기세요.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
    expect(getByTestId('1-jumbo-image')).toBeTruthy();

    expect(
      getByText(
        '스마트 TV, PalyStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
