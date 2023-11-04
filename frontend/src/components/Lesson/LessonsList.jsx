import { Container, Card, CardContent, Typography } from "@mui/material"
import { LessonCard } from "./LessonCard"

export function LessonsList(props) {

  // const list = [{
  //   title: "Lesson 1",
  //   description: "This is the description",
  //   id: "dsf"
  // }]

  

  // const 
  return <>
  {props.lessons.map(elem => <LessonCard {...elem} isCompleted={props.progress.filter(p => p.lesson_id == elem.lesson_id).length > 0}/>)}
  </>

}