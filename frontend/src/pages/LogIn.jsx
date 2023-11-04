import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAdminEmail,mockAdminPassword , mockStudentEmail, mockStudentPassword} from './MockLogin';
import './LogIn.css'
// Mock email and password

function LogIn() {
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

  const handleLogin = () => {
    // Check if the entered username and password match the mock email and password
    if (username === mockAdminEmail && password === mockAdminPassword) {
      // Redirect to the dashboard route after successful login
      navigate('/dashboard');
    } else {
      // Handle login failure (e.g., display an error message)
      if (username === mockStudentEmail && password === mockStudentPassword) {
        // Redirect to the dashboard route after successful login
        navigate('/Survey');  
      } else {
        setError('Login failed. Please check your email and password.');
      }
    }
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
