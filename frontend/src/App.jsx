import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  // BrowserRouter as Router,
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom'
import Register from './Register';

function App() {
  return (
    <div className="LogIn">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
