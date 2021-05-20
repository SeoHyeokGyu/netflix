import React from "react";
import {Header} from "../components";
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({user, setProfile}) {

    return (
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES} src={logo} alt="Netfilx" />
            </Header.Frame>
        </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profile.User>
                        <Profiles.Picture/>
                        <Profiles.Name></Profiles.Name>
                    </Profile.User>
                </Profiles.List>
            </Profiles>
    </>
    );
}
