import { Container, Card, CardContent, Typography } from "@mui/material"
import { LessonCard } from "./LessonCard"

export function LessonsPage(props) {

  const list = [{
    title: "Lesson 1",
    description: "This is the description",
  }]

  

  // const 
  return <>
  {list.map(elem => <LessonCard {...elem} />)}
  </>

}