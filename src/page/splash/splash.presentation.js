/* eslint-disable react-hooks/exhaustive-deps */
import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ROUTE_NAME_LOGIN, ROUTE_NAME_REGISTER } from '../../constant';
import { setToken } from '../../redux/action';

const mapStateToProps = (state, ownProps) => ({
  authenticated: !!state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
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
  onLogoutPressed: () => {
    dispatch(setToken(''))
  }
});

const SplashPage = ({ onAppear, authenticated, onLogoutPressed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => onAppear(navigate, location, authenticated), []);

  return (
    <Container component="main">
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Sera ReactJs
          </Typography>
          {authenticated ? (
            <Button color="inherit" onClick={onLogoutPressed}>Logout</Button>
          ) : (<></>)}
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: 8 }}>
        <Outlet />
      </Box>
    </Container>
  )
}

export default  connect(mapStateToProps, mapDispatchToProps)(SplashPage)
