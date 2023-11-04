import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { LessonsPage } from './components/Lesson/LessonsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <NavBar/>
        <body></body>
      </div> */}

      <LessonsPage/>
    </>
  )
}

export default App
