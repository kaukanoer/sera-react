import React from 'react';
import {
  Box, Grid, Container, Alert,
 } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField } from '../../component';
import { FIELD_EMAIL, FIELD_PASSWORD, ROUTE_NAME_REGISTER } from '../../constant';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ onLoginPressed, loggingIn, errorMessage }) => {
  const theme = createTheme();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get(FIELD_EMAIL);
    const password = data.get(FIELD_PASSWORD);
    onLoginPressed(email, password, navigate);
  };

  return (
    <ThemeProvider theme={theme}>
      {!!(errorMessage) && (
        <Alert severity="error">{errorMessage}</Alert>
      )}
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ 
            mt: 4, 
            padding: 4,
            boxShadow: 2,
            borderRadius: 2,
          }}>
            <TextField
              name={FIELD_EMAIL}
              label="Email Address"
              autoComplete="email"
              required
            />
            <TextField
              name={FIELD_PASSWORD}
              label="Password"
              type="password"
              autoComplete="current-password"
              required
            />
            <Button
              type="submit"
              caption="Sign In"     
              loading={loggingIn}  
              fullWidth
            />

            {!loggingIn && (
              <Grid item>
                <Link to={`..${ROUTE_NAME_REGISTER}`} variant="body2">
                  Sign Up
                </Link>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;