import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  // BrowserRouter as Router,
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom'


function Register() {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRegister = () => {

    navigate('/StudentPortal');

    // You can add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('First Name:', firstName);
    console.log('Last Name', lastName);
    console.log('Email Address', email);

    // Redirect to the dashboard page
  };
  return (
    <div className="Register">



              <h1>Register</h1>
        <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
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
      <button onClick={handleRegister}>Register</button>


    </div>
  );
}
export default Register;