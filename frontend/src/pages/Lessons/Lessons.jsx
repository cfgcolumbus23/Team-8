import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button'

import { LessonsList } from '../../components/Lesson/LessonsList';
import { Container } from '@mui/material';
import { LessonDeck } from '../../components/Lesson/LessonDeck';
import { useMemo } from 'react';
import ReactDOM from "react-dom";



const Lessons = (props) => {
    const [count, setCount] = useState(100);


    const [topics, setTopics] = useState([]);
    const [lessons, setLessons] = useState([]);




    const handleTopicClick = () => {
        const newTopic = {
            name: prompt('Enter topic'),
            lessons: []
        }
        props.topics.add(newTopic)
    }

    useEffect(() => {

        
        (async () => {
            const topicsResponse = await fetch('http://localhost:3000/topic/all');
            const topicsData = await topicsResponse.json();
    
            const lessonsResponse = await fetch('http://localhost:3000/lesson/all');
            const lessonsData = await lessonsResponse.json();
    
            setTopics(topicsData);
            setLessons(lessonsData);




            // console.log
            console.log(topics)
            console.log(lessons)
            ;
        })();

  

    }, []); 



    const handleLessonClick = (topic) => {
        topic.lessons.add({
            title: prompt('Enter lesson name'),
            description: prompt("Enter Lesson Description"),
            id: count
        })
    }

    const topicList = topics.map((topic) =>
        <Accordion>
            <AccordionSummary sx={{ fontSize: 20 }}>{topic.topic_name}</AccordionSummary>
            <AccordionDetails>{
                <LessonsList lessons={lessons.filter(lesson => lesson.topic_id == topic.topic_id)} />} 
            </AccordionDetails> 
        </Accordion>
    );

{/*                 {<Button style={{ padding: "0px 2px" }} variant="contained" onClick={() => handleLessonClick(topic)} onClick2={() => setCount(count => count + 1)}>Add Lesson</Button>}*/}
    return (
        //<LessonDeck></LessonDeck>
        <>
            <Container>{topicList}</Container>
            <Button style={{ padding: "0px 2px" }} variant="contained" onClick={() => handleTopicClick()}>Add Topic</Button>
        </>
    );
}

export default Lessons;