import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <body>
        <BrowserRouter>
          <Routes>
            <Route path="/Dashboard" element={Dashboard()}/>
          </Routes>
        </BrowserRouter>
        </body>
      </div>
    </>
  )
}

export default App
