import React, {useContext, useState} from 'react';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from '../constants/routes';
import {useHistory} from 'react-router-dom';

export default function SignIn() {

    const history =  useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress ==='';

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(()=>{
                history.push(ROUTES.BROWSE);
            }).catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
        });
    };

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>로그인</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input placeholder="이메일 주소 또는 전화번호" value={emailAddress}
                                onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input type="password" autoComplete="off" placeholder="비밀번호" value={password}
                                onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        로그인
                    </Form.Submit>
                </Form.Base>
                <Form.Text>
                    Netflix 회원이 아닌가요? &nbsp;
                    <Form.Link to="/signup">
                        지금 가입하세요.
                    </Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 자세히 알아보기
                </Form.TextSmall>
            </Form>
            <FooterContainer />
        </HeaderContainer>
        </>
    );
}
