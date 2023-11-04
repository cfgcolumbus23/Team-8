import React, { useState, useEffect } from 'react';
import put from '../../backendHelper';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    // Add other form fields here
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await put('/api/endpoint', formData);
      console.log('Response from the server:', response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if necessary
    }
  };

  useEffect(() => {
    document.getElementById('submit').addEventListener('click', (event) => {
      event.preventDefault();
      handleSubmit();
    });
  }, []); // The empty dependency array ensures the effect runs once when the component is mounted

  return (
    <div className="Register">
      <h1>Register</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          id="firstname"
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          id="lastname"
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
        />
      </div>
      {/* Add other form fields here */}
      <div>
        <input type="checkbox" required /> I agree to the terms and conditions.
      </div>
      <button className="register-info" id="submit">
        Register
      </button>
    </div>
  );
}

export default Register;