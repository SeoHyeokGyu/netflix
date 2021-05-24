import React from "react";
import {render, fireEvent} from "@testing-library/react";
import { Footer } from "../../components";

describe('<Footer />', () => {
    it('renders the <Footer /> with populated data', () => {
        const {container, getByText} = render( <Footer>
            <Footer.Title>
                질문이 있으신가요? 문의 전화: 00-000-000-0000
            </Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">자주 묻는 질문</Footer.Link>
                    <Footer.Link href="#">투자 정보(IR)</Footer.Link>
                    <Footer.Link href="#">개인정보</Footer.Link>
                    <Footer.Link href="#">속도 테스트 </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">고객 센터</Footer.Link>
                    <Footer.Link href="#">입사 정보</Footer.Link>
                    <Footer.Link href="#">쿠키 설정</Footer.Link>
                    <Footer.Link href="#">법적 고지</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">계정</Footer.Link>
                    <Footer.Link href="#">Netflix 지원 디바이스</Footer.Link>
                    <Footer.Link href="#">회사 정보</Footer.Link>
                    <Footer.Link href="#">Netflix 오리지널</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">미디어 센터</Footer.Link>
                    <Footer.Link href="#">이용 약관</Footer.Link>
                    <Footer.Link href="#">문의하기</Footer.Link>
                </Footer.Column>

            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix 대한민국</Footer.Text>
            <Footer.Text>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0058
                <br />
                대표: 레지널드 숀 톰프슨
                <br />
                이메일 주소: korea@netflix.com
                <br />
                주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
                <br />
                클라우드 호스팅: Amazon Web Services Inc.
                <br />
                공정거래위원회 웹사이트 링크
            </Footer.Text>
        </Footer>
        );

        expect(getByText('질문이 있으신가요? 문의 전화: 00-000-000-0000')).toBeTruthy();
        expect(getByText('자주 묻는 질문')).toBeTruthy();
        expect(getByText('투자 정보(IR)')).toBeTruthy();
        expect(getByText('Netflix 지원 디바이스')).toBeTruthy();
        expect(getByText('회사 정보')).toBeTruthy();
        expect(getByText('Netflix 오리지널')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();



    });
})