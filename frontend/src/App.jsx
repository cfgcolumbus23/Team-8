import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, redirect, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Lessons from "./pages/Lessons/Lessons"
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './pages/LogIn';
import Survey from './pages/Survey';
// import Main from './main';
import { LessonView } from "./components/Lesson/LessonView";

const topic1 = {
  name: "topic1",
  lessons: [{
    title: "Lesson 1",
    description: "This is the description",
    id: "temp"
  },
  {
    title: "Lesson 2",
    description: "This is the description",
    id: "temp"
  }]
};

const topic2 = {
  name: "topic2",
  lessons: [{
    title: "Lesson 1",
    description: "This is the description",
    id: "temp"
  },
  {
    title: "Lesson 2",
    description: "This is the description",
    id: "temp"
  }]
};

const tempTopics = [topic1, topic2];

function App() {

  const [userData, setUserData] = useState(false);
  const [currentLesson, setCurrentLesson] = useState([]);

  const navigate = useNavigate();


  // useEffect(() => {
  //   if (!userData) {
  //     navigate('/login');

  //   }
  //     // redirect('/login');
  // }, []);


  useEffect(() => {

    console.log("this ran");
    console.log(userData);

    if (!userData)
      return;

    

    sessionStorage.setItem("userData", JSON.stringify(userData));

    // if (!userData)
    //   return; 

    // if (userData.is_admin) {
    //   redirect('./dashboard')
    //   return;
    // } 

    // redirect('./lessons')

  }, [userData]);



  const loginHander = (data) => {
    setUserData(data);
  }

  return (
    <>
      <NavBar/>
        <body>
        <Routes>
          <Route path="/Login" element={<LogIn loginHandler={ loginHander }/>}/>
          <Route path="/Survey" element={<Survey topics={tempTopics}/>}/>
          <Route path="/Dashboard" element={Dashboard()}/>
          <Route path="/Lessons" element={<Lessons topics={tempTopics}/>}/>
          <Route path="/Lessons/:topic_id/:lesson_id" element={<LessonView  userData={userData} topics={tempTopics}/>}/>

          {/* <Route path="/Lessons/Lesson" element={<Lessons topics={tempTopics}/>}/> */}
          {/* <Route path="/" element={<Main />} /> */}
        </Routes>
        </body>
    </>
  )
}

export default App;
