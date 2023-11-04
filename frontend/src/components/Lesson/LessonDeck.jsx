// import { Container, Card, CardContent, Typography } from "@mui/material"
// import {  } from "./LessonCard"

import { Container, Stack, Typography, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
// import { Button } from "bootstrap";

export function LessonDeck(props) {

    const [page, setPage] = useState(0);

    const { content } = props;
    const { data } = content.lesson_data;

    console.log('content');
    console.log(content);



    const moveBackward = () => setPage(Math.max(0, page - 1));
    const moveForward = () => {
        setPage(Math.min(data.length - 1, page + 1))
    };


    let updateProgress = () => {
        if (page == data.length - 1) {
            (async () => {


                const userData = JSON.parse(sessionStorage.getItem("userData"));


                // fetch('http://localhost:3000/progress/lesson', { m });

                const response = await fetch('http://localhost:3000/progress/lesson', { 
                    method: 'PUT', 
                    body: JSON.stringify({ 
                        email: userData.email,
                        topic_id: content.topic_id,
                        lesson_id: content.lesson_id
                    }),
                    headers: {'Content-Type': 'application/json'}
                  });

                console.log(userData);


            })();
        }
    }

    updateProgress();


    useEffect(() => {
       updateProgress();
    }, [page]);

    return <>
        {/* sx={{ fontSize: 18, textAlign: 'left' }} */}


        {/* <Box >

    </Box> */}

        <Container fixed={true} style={{ boxShadow: '1px' }} sx={{ boxShadow: 2 }}>
            <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2 }}>{content.lesson_name}</Typography>
            <hr/>
            <Typography variant="h5" style={{ textAlign: 'left' }} sx={{ mt: 2 }}>{data[page].title}</Typography>
            <Typography variant="h6" style={{ textAlign: 'left', marginBottom: 2 }}>{data[page].description}</Typography>
            <Stack direction="row" spacing={12} sx={{ marginBottom: 2 }}>
                <Button variant="contained" fullWidth={true} onClick={moveBackward}>
                    Back
                </Button>
                <Button variant="contained" fullWidth={true} onClick={moveForward}>
                    Forward
                </Button >
            </Stack>

        </Container>



    </>


}
