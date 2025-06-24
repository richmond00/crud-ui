import React from 'react';
import UserList from './components/UserList';
import './App.css';
import PageTitle from './components/PageTitle';

const App = () => {
  return (
    <div className="container">
      <PageTitle />
      <UserList />
    </div>
  );
};

export default App;
