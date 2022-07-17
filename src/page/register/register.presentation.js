import React, { useState } from 'react';
import {
  Box, Container, Grid, Alert,
 } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField } from '../../component';
import {
  FIELD_REGISTER_EMAIL, FIELD_REGISTER_PASSWORD, ROUTE_NAME_LOGIN,
  FIELD_REGISTER_CONFIRM_PASSWORD,
} from '../../constant';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = ({ onRegisterPressed, registering, errorMessage }) => {
  const theme = createTheme();
  const navigate = useNavigate();

  const [confirmPasswordHelperMessage, setConfirmPasswordHelperMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get(FIELD_REGISTER_EMAIL);
    const password = data.get(FIELD_REGISTER_PASSWORD);
    const confirmPassword = data.get(FIELD_REGISTER_CONFIRM_PASSWORD);

    if (confirmPassword !== password) {
      setConfirmPasswordHelperMessage('Incorrect Confirm Password')
    } else {
      onRegisterPressed(email, password, navigate);
    }
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
              name={FIELD_REGISTER_EMAIL}
              label="Email Address"
              autoComplete="email"
              required
            />
            <TextField
              name={FIELD_REGISTER_PASSWORD}
              label="Password"
              type="password"
              autoComplete="current-password"
              required
            />
            <TextField
              id={FIELD_REGISTER_CONFIRM_PASSWORD}
              name={FIELD_REGISTER_CONFIRM_PASSWORD}
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              helperText={confirmPasswordHelperMessage}
              error={!!confirmPasswordHelperMessage}
              required
              onChangeText={() => setConfirmPasswordHelperMessage('')}
            />

            <Button
              type="submit"
              caption="Register"     
              loading={registering}  
              fullWidth
            />
            <Grid item>
              <Link to={`..${ROUTE_NAME_LOGIN}`} variant="body2">
                Back to Login
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterPage;