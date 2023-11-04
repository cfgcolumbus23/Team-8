import React, { useState } from 'react';
import put from '../backendHelper';

function Register() {
  document.getElementById('submit').addEventListener('click', async function (event) {
    event.preventDefault();
  
    // Get input values
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
  
    // Create a JSON object
    const userData = {
      firstname,
      lastname,
      email,
    };
  
    try {
      const response = await put('/api/endpoint', userData);
      console.log('Response from the server:', response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if necessary
    }
  });

  return (
    <div className="Register">
      <h1>Register</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button className="register-info" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default Register;




// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import { useRoutes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {
//   // BrowserRouter as Router,
//   BrowserRouter,
//   Link,
//   Route,
//   Routes
// } from 'react-router-dom'


// function Register() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleRegister = () => {

//     navigate('/StudentPortal');

//     // You can add your login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//     console.log('First Name:', firstName);
//     console.log('Last Name', lastName);
//     console.log('Email Address', email);

//     // Redirect to the dashboard page
//   };
//   return (
//     <div className="Register">



//               <h1>Register</h1>
//         <div>
//         <label>First Name:</label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </div>
//       <div>
//         <label>Last Name:</label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </div>
//       <div>
//         <label>Email Address:</label>
//         <input
//           type="text"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </div>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       <button onClick={handleRegister}>Register</button>


//     </div>
//   );
// }
// export default Register;