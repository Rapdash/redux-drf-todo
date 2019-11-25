import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN_ROUTE } from '../../../constants/routes';

const ProtectedRouteBase = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        // TODO: Make this respond to redux auth state instead of just being jammed open
        token ? <Component {...props} /> : <Redirect to={LOGIN_ROUTE} />
      }
    />
  );
};

const mapState = state => ({
  token: state.auth.token
});

export const ProtectedRoute = connect(mapState)(ProtectedRouteBase);
