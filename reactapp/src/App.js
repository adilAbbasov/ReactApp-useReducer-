import React from 'react'
import './App.css';
import Users from './components/Users';
import { UserProvider } from './components/context';

function App() {
  return(
    <div className='App'>
      <UserProvider>
        <Users/>
      </UserProvider>
    </div>
  );
}

export default App;
