/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

const MainPage = ({ token, fullName, onLogoutPressed, onAppear }) => {
  useEffect(onAppear, [])
  return (
    <div>
      <p>Hello World</p>
      <p>{fullName}</p>
      {token ? <p>{token}</p> : <p>No Token</p>}
      <button onClick={onLogoutPressed}>Clear Token</button>
    </div>
  )
}
export default MainPage;