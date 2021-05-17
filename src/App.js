import React from "react";
import {JumbotronContainer} from "./containers/jumbotron";
import {FooterContainer} from "./containers/footer";
import {FaqContainer} from "./containers/faq";

export default function App() {
    return (
        <>
            <JumbotronContainer/>
            <FaqContainer/>
            <FooterContainer/>
        </>

    );
}
