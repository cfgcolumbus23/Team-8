import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    // You can add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to the dashboard route after successful login
    navigate('/dashboard');
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
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LogIn;
