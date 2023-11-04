import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { mockAdminEmail,mockAdminPassword , mockStudentEmail, mockStudentPassword} from './MockLogin';
import './LogIn.css'
import { red } from '@mui/material/colors';
// Mock email and password

function LogIn(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {

    
    const response = await fetch('http://localhost:3000/user/login', { 
      method: 'POST', 
      body: JSON.stringify({ 
        email: username
      }),
      headers: {'Content-Type': 'application/json'}
    });

    const data = await response.json();

    // console.log(data);

    if (data.error)
      return;

    if (data.is_admin) {
      navigate('/dashboard')
    } else {
      navigate('/lessons')
    }


    // const { loginHander }

    console.log(props);
    console.log(props.loginHandler);

    props.loginHandler(data);

    // if (data.is_admin) {
    //   redirect('./dashboard');
    //   return;
    // }

    // redirect('./lessons')
     




    // await fetch('local')




    // Check if the entered username and password match the mock email and password
    // if (username === mockAdminEmail && password === mockAdminPassword) {
    //   // Redirect to the dashboard route after successful login
    //   navigate('/dashboard');
    // } else {
    //   // Handle login failure (e.g., display an error message)
    //   if (username === mockStudentEmail && password === mockStudentPassword) {
    //     // Redirect to the dashboard route after successful login
    //     navigate('/Survey');  
    //   } else {
    //     setError('Login failed. Please check your email and password.');
    //   }
    // }
  };

  return (
    <div className="LogIn">
      <h1>Login</h1>
      <div>
        <label>Email:</label>
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
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LogIn;
