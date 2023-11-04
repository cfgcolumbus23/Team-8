import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import LessonTemplate from './LessonTemplate/LessonTemplate'

const Lessons = (props) => {
const topicList = props.topics.map((topic) => 
    <Accordion>
        <AccordionSummary>{topic.name}</AccordionSummary>
        <AccordionDetails>{<LessonTemplate lessons = {topic.lessons}/>}</AccordionDetails>
    </Accordion>
);
    return (
        <div>{topicList}</div>
    );
}

export default Lessons;