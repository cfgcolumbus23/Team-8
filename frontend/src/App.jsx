import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
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
import LogIn from './LogIn';

function App() {
  return (
    <div className="LogIn">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<LogIn/>}></Route>
          <Route path = '/StudentPortal' element = {<Student/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
