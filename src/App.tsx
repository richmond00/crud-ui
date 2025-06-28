import React, { useState } from 'react';
import UserList from './components/UserList';
import './App.css';
import PageTitle from './components/PageTitle';
import UserDetails from './components/UserDetails';

const App = () => {
  const [userId, setUserId] = useState('');

  return (
    <div className="container">
      <PageTitle />
      <UserList setUserId={setUserId} />
      <UserDetails userId={userId} setUserId={setUserId} />
    </div>
  );
};

export default App;
