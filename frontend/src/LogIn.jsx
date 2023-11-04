import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Student from './Student';
import { useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  // BrowserRouter as Router,
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom'

function LogIn() {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {

    navigate('/StudentPortal');

    // You can add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to the dashboard page
  };

  return (
    <div className="LogIn">
   
        

        <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>


    </div>
  );
}

export default LogIn;
