import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Accordion} from "../../components";
import faqsData from "../../fixtures/faqs";

describe('<Accordion />', () => {
    it('renders the <Accordion /> with populated data', () => {
        const {container, getByText} = render(
            <Accordion>
                <Accordion.Title>
                    자주 묻는 질문
                </Accordion.Title>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        );
        expect(getByText('자주 묻는 질문')).toBeTruthy();
        expect(getByText('넷플릭스란 무엇인가요?')).toBeTruthy();
        expect(getByText('넷플릭스 요금은 얼마인가요?')).toBeTruthy();
        expect(getByText('어디에서 시청할 수 있나요?')).toBeTruthy();
        expect(getByText('맴버십을 해지하려면 어떻게 하나요?')).toBeTruthy();
        expect(getByText('넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('opens and closes the <Accordion /> component', () => {
        const {container, queryByText} = render(
            <Accordion>
                <Accordion.Title>
                    자주 묻는 질문
                </Accordion.Title>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        );

        const whatIsNetflixBodyText =
            "넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다."

        expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
        fireEvent.click(queryByText('넷플릭스란 무엇인가요?'));
        expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();

        fireEvent.click(queryByText('넷플릭스란 무엇인가요?'));
        expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });
});