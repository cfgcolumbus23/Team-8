
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";



export function LessonCard(props) {
  return <>
    <Card variant="outlined" sx={{ md: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18, textAlign: 'left' }} color="text.secondary" gutterBottom>
         {props.title}
        </Typography>
        <Typography sx={{ mb: 1}} color="text.secondary">
          {props.description}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        <CardActions sx={{ p: 0 }}>
          <Button size="small">Start</Button>
        </CardActions>
      </CardContent>
    </Card>

  </>
}