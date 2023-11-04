import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import NavBar from "./components/NavBar/NavBar"
//import Lessons from "./pages/Lessons/Lessons"
//import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
//import LogIn from './pages/LogIn';
//import Survey from './pages/Survey'
import Register from './pages/Register'



// const topic1 = {
//   name: "topic1",
//   lessons: [{
//     title: "Lesson 1",
//     description: "This is the description",
//     id: "temp"
//   },
//   {
//     title: "Lesson 2",
//     description: "This is the description",
//     id: "temp"
//   }]
// };

// const topic2 = {
//   name: "topic2",
//   lessons: [{
//     title: "Lesson 1",
//     description: "This is the description",
//     id: "temp"
//   },
//   {
//     title: "Lesson 2",
//     description: "This is the description",
//     id: "temp"
//   }]
// };

// const list = [{
//   title: "Lesson 1",
//   description: "This is the description",
//   id: "dsf"
// }]

// const topic2 = {
//   name: "topic2",
//   lessons: ["leson1", "lesson2", "lesson3"]
// };

//const tempTopics = [topic1, topic2];

function App() {
  return (
    <div className="LogIn">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Register/>}></Route>
        </Routes>
        {/* <Routes>
            <Route path="/Dashboard" element={Dashboard()}/>
          </Routes>
        <Routes>
          <Route path="/Lessons" element={<Lessons topics={tempTopics}/>}/>
        </Routes>  */}
        <Routes>
          <Route path = '/Register' element = {<Register/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
