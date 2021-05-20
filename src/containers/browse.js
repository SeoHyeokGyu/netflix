import React, {useContext, useEffect, useState} from "react";
import {SelectProfileContainer} from "./profiles";
import {FirebaseContext} from "../context/firebase";
import {Header, Loading} from '../components'

export function BrowseContainer({slides}) {

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
            <Header src="joker1"><p>hee</p></Header>
        </>
    ) :( <SelectProfileContainer user={user} setProfile={setProfile}/>
);
}