import React, {useContext, useState} from 'react';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from '../constants/routes';
import {useHistory} from 'react-router-dom';

export default function SignUp() {

    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
            .then(() => {
            history.push(ROUTES.BROWSE);
        })).catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>회원 가입</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input placeholder="이름" value={firstName}
                                    onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input placeholder="이메일 주소 또는 전화번호" value={emailAddress}
                                    onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input type="password" autoComplete="off" placeholder="비밀번호" value={password}
                                    onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            회원 가입
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Netflix 회원이신가요? &nbsp;
                        <Form.Link to="/signin">
                            지금 로그인.
                        </Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 자세히 알아보기
                    </Form.TextSmall>
                </Form>
                <FooterContainer/>
            </HeaderContainer>
        </>
    );
}
