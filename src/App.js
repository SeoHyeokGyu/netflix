import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, Browse, SignIn, SignUp} from "./pages";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes";

export default function App() {
    const user = null;

    return (
        <Router>

            <IsUserRedirect user={user}
                            loggedInPath={ROUTES.BROWSE}
                            path={ROUTES.SIGN_IN} exact>
                <SignIn/>
            </IsUserRedirect>
            <IsUserRedirect user={user}
                            loggedInPath={ROUTES.BROWSE}
                            path={ROUTES.SIGN_UP} exact>
                <SignUp/>
            </IsUserRedirect>
            <ProtectedRoute user={user}
                            path={ROUTES.BROWSE} exact>
                <Browse/>
            </ProtectedRoute>
            <IsUserRedirect user={user}
                            loggedInPath={ROUTES.BROWSE}
                            path={ROUTES.HOME} exact>
                <Home/>
            </IsUserRedirect>

        </Router>

    );
}
