import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button'

import { LessonsList } from '../../components/Lesson/LessonsList';
import { Container } from '@mui/material';
import { LessonDeck } from '../../components/Lesson/ListDeck';
import { useMemo } from 'react';
import ReactDOM from "react-dom";


const Lessons = (props) => {
    const [count, setCount] = useState(100);

    const handleTopicClick = () => {
        const newTopic = {
            name:  prompt('Enter topic'),
            lessons: []
        }
        props.topics.add(newTopic)
    }

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
        <AccordionDetails>{<LessonsList lessons={topic.lessons} />} {<Button style={{ padding: "0px 2px" }} variant="contained" onClick={() => handleLessonClick(topic)} onClick2={() => setCount(count => count + 1)}>Add Lesson</Button>} </AccordionDetails>
        </Accordion>
    );

    return (
        //<LessonDeck></LessonDeck>
        <>
            <Container>{topicList}</Container>
            <Button style={{ padding: "0px 2px" }} variant="contained" onClick={() => handleTopicClick()}>Add Topic</Button>
        </>
    );
}

export default Lessons;