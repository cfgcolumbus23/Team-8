import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import LessonTemplate from './LessonTemplate/LessonTemplate'

import { LessonsList } from '../../components/Lesson/LessonsList';
import { Container } from '@mui/material';
import { LessonDeck } from '../../components/Lesson/ListDeck';
import { CreateLesson } from '../../components/Lesson/CreateLesson';

const Lessons = (props) => {
const topicList = props.topics.map((topic) => 
    <Accordion>
        <AccordionSummary>{topic.name}</AccordionSummary>
        <AccordionDetails>{<LessonsList lessons={topic.lessons} />}</AccordionDetails>
    </Accordion>
);
    return (
        // <Container>{topicList}</Container>
        // <LessonDeck></LessonDeck>
        <CreateLesson/>
    );
}

export default Lessons;