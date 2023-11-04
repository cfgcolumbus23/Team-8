// import { Container, Card, CardContent, Typography } from "@mui/material"
// import {  } from "./LessonCard"

import { Container, Stack, Typography, Button, Paper } from "@mui/material";
// import { Button } from "bootstrap";

export function LessonDeck(props) {

    // props.


    return <>
        {/* sx={{ fontSize: 18, textAlign: 'left' }} */}


        {/* <Box >

    </Box> */}
        <Container fixed={true} style={{ boxShadow: '1px' }} sx={{ boxShadow: 2 }}>
            <Typography variant="h3" style={{ textAlign: 'left' }} sx={{ mt: 2 }}>Hello</Typography>
            <Typography variant="h6" style={{ textAlign: 'left' }}>Description.</Typography>
            <Stack direction="row" spacing={12} sx={{ marginBottom: 2 }}>
                <Button variant="contained" fullWidth={true}>
                    Back
                </Button>
                <Button variant="contained" fullWidth={true}>
                    Forward
                </Button >
            </Stack>

        </Container>



    </>


}
