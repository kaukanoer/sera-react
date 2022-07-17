/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ROUTE_NAME_LOGIN, ROUTE_NAME_REGISTER } from '../../constant';

export const mapStateToProps = (state, ownProps) => ({
  authenticated: !!state.auth.token,
})

export const mapDispatchToProps = () => ({
  onAppear: (navigate, location, authenticated) => {
    if (location.pathname === ROUTE_NAME_REGISTER) {
      return navigate(`..${ROUTE_NAME_REGISTER}`, { replace: true });
    } 
    if (authenticated) {
      return navigate(`..${location.pathname}`, { replace: true });
    } 
    else {
      return navigate(`..${ROUTE_NAME_LOGIN}`, { replace: true });
    }
  },
});

const SplashPage = ({ onAppear, authenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => onAppear(navigate, location, authenticated), []);
  return (
    <Outlet />
  )
}

export default  connect(mapStateToProps, mapDispatchToProps)(SplashPage)
