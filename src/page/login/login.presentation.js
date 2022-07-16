import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLoginPressed, loggingIn }) => {
  const navigate = useNavigate();
  return(
    <div>
      <p>Please Login</p> 
      {loggingIn ? (
        <p>Loading</p>
      ) : (
        <button onClick={() => onLoginPressed(navigate)}>Login</button>
      )}
    </div>
  )
}

export default LoginPage;