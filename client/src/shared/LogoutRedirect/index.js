import React from "react";
import { Redirect } from "react-router-dom";

import { LOGIN_ROUTE } from "../../constants/routes";

const LogoutRedirectBase = () => {
    // TODO: Should log the user out once redux is set up
    return <Redirect to={LOGIN_ROUTE} />
}

// TODO: Wire Up Redux
export const LogoutRedirect = LogoutRedirectBase