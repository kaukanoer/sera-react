import React from 'react';

const MainPage = ({ token, fullName, onButtonPressed }) => (
  <div>
    <p>Hello World</p>
    <p>{fullName}</p>
    {token ? <p>{token}</p> : <p>No Token</p>}
    <button onClick={() => onButtonPressed('AAA')}>Set Token</button>
    <button onClick={() => onButtonPressed(null)}>Clear Token</button>
  </div>
)

export default MainPage;