import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
          <Route path="/Lessons" element={<Lessons topics={tempTopics}/>}/>
        </Routes>
        </BrowserRouter>
        </body>
      </div>
    </>
  )
}

export default App;
