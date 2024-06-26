
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



export function LessonCard(props) {

  const navigate = useNavigate();

  return <>
    <Card variant="outlined" sx={{ md: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18, textAlign: 'left' }} color="text.secondary" gutterBottom>
         {props.lesson_name}
        </Typography>
        <CardActions sx={{ p: 0 }}>
          <Button size="small" sx={{ color: `${props.isCompleted ? 'green' : 'blue'}` }} onClick={() => {

            console.log("redirect started");

            navigate(`/Lessons/${props.topic_id}/${props.lesson_id}`);

          }}>{props.isCompleted ? "Completed" : "Start"}</Button>
        </CardActions>
      </CardContent>
    </Card>

  </>
}