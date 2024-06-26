import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import { CardActions, CardContent, Typography, Button } from '@mui/material'
import ReactSearchBox from 'react-search-box'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [students, setStudents] = useState([])
    const [progress, setProgress] = useState([])


    // const [topicToAdd, setTopicToAdd] = useState(null)
    // const [topics, setTopics] = useState([])
    // const NullTopic = { id: 0, title: '<none>', description: '<none>' }
    const [searchValue, setSearchValue] = useState('')

    
    // const 

    useEffect(() => {

        (async () => {
            const usersResponse = await fetch('http://localhost:3000/user/all');
            const usersData = await usersResponse.json();

            // console.log()
            setStudents(usersData);

    
            const progressResponse = await fetch('http://localhost:3000/progress/all');
            const progressData = await progressResponse.json();
    
            // setTopics(topicsData);
            // setLessons(lessonsData);

            setProgress(progressData);

            // console.log
            // console.log(topics)
            // console.log(lessons)
            // ;
        })();


    }, [])



    // function getStudents() {
    //     // fetch('/students')
    //     //     .then(res => res.json())
    //     //     .then(data => setStudents(data))

    //     setStudents([
    //         {
    //             id: 1,
    //             name: 'Student 1',
    //             email: 'testemail@gmail.com',
    //             topics: [
    //                 {
    //                     id: 1,
    //                     title: 'Topic 1',
    //                     description: 'Description 1',
    //                     progress: 'in progress'
    //                 },
    //                 {
    //                     id: 2,
    //                     title: 'Topic 2',
    //                     description: 'Description 2',
    //                     progress: 'completed'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 2,
    //             name: 'Student 2',
    //             email: 'testemail@gmail.com',
    //             topics: [
    //                 {
    //                     id: 1,
    //                     title: 'Topic 1',
    //                     description: 'Description 1',
    //                     progress: 'approved'
    //                 },
    //                 {
    //                     id: 2,
    //                     title: 'Topic 2',
    //                     description: 'Description 2',
    //                     progress: 'in progress'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 3,
    //             name: 'Student test',
    //             email: 'test@gmail',
    //             topics: [
    //                 {
    //                     id: 1,
    //                     title: 'Topic 1',
    //                     description: 'Description 1',
    //                     progress: 'approved'
    //                 },
    //                 {
    //                     id: 2,
    //                     title: 'Topic 2',
    //                     description: 'Description 2',
    //                     progress: 'in progress'
    //                 }
    //             ]
    //         }
    //     ])
    // }

    // function getTopics() {
    //     // fetch('/topics')
    //     //     .then(res => res.json())
    //     //     .then(data => setTopics(data))

    //     let newTopics = [
    //         {
    //             id: 1,
    //             title: 'Topic 1',
    //             description: 'Description 1',
    //             progress: 'in progress'
    //         },
    //         {
    //             id: 2,
    //             title: 'Topic 2',
    //             description: 'Description 2',
    //             progress: 'in progress'
    //         }
    //     ]
    //     newTopics.unshift(NullTopic)

    //     setTopics(newTopics)
    // }

    // useEffect(() => {
    //     getStudents()
    //     getTopics()
    // }, [])

    // function approveTopic(studentIndex, topicIndex) {
    //     let newStudents = [...students]
    //     newStudents[studentIndex].topics[topicIndex].progress = 'approved'
    //     setStudents(newStudents)
    // }

    // function addTopic(studentIndex) {
    //     let newStudents = [...students]
    //     if (topicToAdd !== null) {
    //         newStudents[studentIndex].topics.push(topicToAdd)
    //     }
    //     setStudents(newStudents)
    // }

    // function postStudents() {
     

    //     console.log(students)
    // }

    // function addTopicButton(studentIndex, topic) {
    //     return (
    //         <div>
    //             <label for="topics">Assign Topic: </label>
    //             <select onChange={(e) => setTopicToAdd(e.target.value > 0 ? topics[e.target.value] : null)}>
    //                 {topics.map(topic => (
    //                     <option value={topic.id} id={topic.id}>{topic.title}</option>
    //                 ))}
    //             </select>
    //             <Button variant="success" onClick={() => addTopic(studentIndex)}>Add</Button>
    //         </div>
    //     )
    // }

    function studentCard(student) {

        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {student.firstname + " " + student.lastname}
                    </Typography>
                    <Typography variant="body2">
                        {student.email}
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                        Progress: {progress.filter(p => p.email == student.email).length}
                    </Typography>
        
                    {/* {addTopicButton(studentIndex)} */}
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <ReactSearchBox 
                placeholder="Enter student number or name"
                value={searchValue}
                onChange={(e) => setSearchValue(e)}
            />
            {
                students.map((student) => (
                    (searchValue === '' || (`${student.firstname} ${student.lastname}`).toLowerCase().includes(searchValue)) && (
                        studentCard(student, progress)
                    )
                ))
            }
            {/* <Button variant="success" onClick={postStudents} >Submit</Button> */}
        </div>
    )
}

export default Dashboard