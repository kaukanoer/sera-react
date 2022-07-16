import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTE_NAME_LOGIN } from '../constant';

const mapStateToProps = (state) => ({
  authenticated: !!state.auth.token,
});

const PrivateRoute = ({ element: Element, authenticated }) => {
  if (authenticated) {
    return <Element />
  }
  return <Navigate to={`../${ROUTE_NAME_LOGIN}`} />
}

export default connect(mapStateToProps)(PrivateRoute);
