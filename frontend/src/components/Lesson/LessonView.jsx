import { useParams } from "react-router-dom";
import { LessonDeck } from "./LessonDeck";
import { useEffect, useState } from "react";



export function LessonView(props) {

    const [topics, setTopics] = useState([]);
    const [lessons, setLessons] = useState([]);

    const { topic_id, lesson_id } = useParams();

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

    }, [])

    // console.log('lessons');
    // console.log(lessons);

    // console.log(props.userData);

    const lessonQuery = lessons.filter(lesson => lesson.lesson_id == lesson_id && lesson.topic_id == topic_id);

    return lessonQuery.length > 0 ? <LessonDeck content={lessonQuery[0]}/> : <></>

    // return <></>
   
}