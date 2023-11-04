import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, useNavigate } from 'react-router-dom';

// function Main() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect to the login page when the component mounts
//     navigate('/login');
//   }, [navigate]);

//   return null;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// export default Main;
