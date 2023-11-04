import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Lessons from "./pages/Lessons/Lessons"
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'

const topic1 = {
  name: "topic1",
  lessons: ["leson1", "lesson2", "lesson3"]
};

const topic2 = {
  name: "topic2",
  lessons: ["leson1", "lesson2", "lesson3"]
};

const tempTopics = [topic1, topic2];

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
        <Routes>
          <Route path="/Lessons" element={<Lessons topics = {tempTopics}/>}/>
        </Routes>
        </BrowserRouter>
        </body>
      </div>
    </>
  )
}

export default App
