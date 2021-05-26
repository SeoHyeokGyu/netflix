import React from 'react';
import { OptForm, Feature } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>영화, TV 프로그램을 무제한으로.</Feature.Title>
          <Feature.SubTitle>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</Feature.SubTitle>
          <OptForm>
            <OptForm>
              <OptForm.Text>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
              </OptForm.Text>
              <OptForm.Input placeholder="이메일 주소" />
              <OptForm.Button>시작하기</OptForm.Button>
            </OptForm>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
