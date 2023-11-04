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
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

 // function textboxChange () {
   // let firstNameBox = document.getElementById("firstName").value;
    // let lastNameBox = document.getElementById("lastName").value;
    // let emailBox = document.getElementById("email").value;
    // let passwordBox = document.getElementById("password").value;

    // if (firstNameBox.length > 0 && lastNameBox.length > 0 && emailBox.length > 0 && passwordBox.length > 0) {
         // document.getElementById("register_button").style = 'display: block';
     // }

  }

  

  const handleRegister = () => {

    navigate('/StudentPortal');

    // You can add your login logic here
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
          id='firstName'
          type="text"
          value={firstName}
          onChange={textboxChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          id='lastName'
          type="text"
          value={lastName}
          onChange={textboxChange}
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          id='email'
          type="text"
          value={email}
          onChange={textboxChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          id='password'
          type="password"
          value={password}
          onChange={textboxChange}
        />
      </div>
      <button id='register_button' style='display: block' onClick={handleRegister}>Register</button>


    </div>
  );
}
export default Register;