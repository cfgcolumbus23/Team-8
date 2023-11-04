The front-end of this project uses React.js to provide the user-facing side of the project as well as connect to the database on the backend.  Connections are made using fetch.
There are other useful files present including:
  frontend/backendHelper.js - provides a framework for connecting to the PostgreSQL database using axios, streamlining the front-to-back connection for code in the front-end side of the project.

#App.jsx - Routing
The App.jsx component serves as the entry point for your React application. It plays a crucial role in handling routing by using the "Routes" mechanism to navigate between different pages within the application. Each of the application's pages is returned and routed from this component.

#Lessons.jsx - Topics and Lessons Display
The Lessons.jsx component is responsible for displaying lessons and topics within your application. It retrieves current topics and lessons from backend database. It uses Material UI accordion components to create a user-friendly interface. This component accepts an array of topics as a parameter. Each topic contains the name of the topic and an array of lessons related to it. Lessons are composed of a name, description, and a unique identifier (id). The Lessons.jsx component iterates through the array, organizing topics and lessons within accordions.

#LessonList.jsx - List of Lessons
The LessonList.jsx component is used to generate a list of lessons, turning each lesson in the passed lessons array into a card using the LessonCard function. This component is designed to be used within the Lessons.jsx component, allowing lessons to be presented as cards within an accordion.