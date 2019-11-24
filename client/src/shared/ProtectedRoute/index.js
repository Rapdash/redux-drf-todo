import React from "react";
import { Route, Redirect } from "react-router-dom";

import { LOGIN_ROUTE } from "../../constants/routes";

const ProtectedRouteBase = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            // TODO: Make this respond to redux auth state instead of just being jammed open
            true
            ? <Component {...props} />
            : <Redirect to={LOGIN_ROUTE} />
        )} />
    )
}

export const ProtectedRoute = ProtectedRouteBase;