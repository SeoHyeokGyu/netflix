import React, {useContext, useEffect, useState} from "react";
import {SelectProfileContainer} from "./profiles";
import {FirebaseContext} from "../context/firebase";
import {Header, Loading} from '../components'
import * as ROUTES from '../constants/routes'
import logo from "../logo.svg";

export function BrowseContainer({slides}) {

    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({});
    const [loding, setLoding] = useState(true);
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {

        setTimeout(() => {
            setLoding(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
        <>
            {loding ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES} src={logo} alt="Netfilx"/>
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>films</Header.TextLink>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={()=> firebase.auth().signOut()}>로그아웃</Header.TextLink>
                                </Header.Group>

                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>


                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>Forever alone in a crowd, failed comedian Arthur Fleck seeks
                        connection as he walks the streets od Gotham City. Arthur wears two
                        masks -- the one he paints fot his dat job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile}/>
    );
}