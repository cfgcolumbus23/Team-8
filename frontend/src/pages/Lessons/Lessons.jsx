import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button'
// import LessonTemplate from './LessonTemplate/LessonTemplate'

import { LessonsList } from '../../components/Lesson/LessonsList';
import { Container } from '@mui/material';
import { LessonDeck } from '../../components/Lesson/ListDeck';
import { useMemo } from 'react';
import ReactDOM from "react-dom";


const Lessons = (props) => {
    const [count, setCount] = useState(100);

    const handleTopicClick = () => {
        const newTopic = {
            name: prompt('Enter topic'),
            lessons: []
        }
        props.topics.add(newTopic)
    }

    useEffect(() => {

        
        (async () => {
            const response = await fetch('http://localhost:3000/topic/all');
            const data = await response.json();
    

            // console.log
            console.log(data);
        })();

  

    }, []); 



    const handleLessonClick = (topic) => {
        topic.lessons.add({
            title: prompt('Enter lesson name'),
            description: prompt("Enter Lesson Description"),
            id: count
        })
    }

    const topicList = props.topics.map((topic) =>
        <Accordion>
            <AccordionSummary>{topic.name}</AccordionSummary>
            <AccordionDetails>{
                <LessonsList lessons={topic.lessons} />} 
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