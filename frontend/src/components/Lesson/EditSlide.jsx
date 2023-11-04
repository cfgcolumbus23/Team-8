import React, { useState } from "react";


import { Container, Stack, TextField, TextareaAutosize, Box, Typography, Button } from "@mui/material";
// import { Button } from "bootstrap";


export function EditSlide(props) {


    // const { title, description } = 

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);


    // content

    console.log(props);

    return <>

        <Container sx={{ mt: 1, boxShadow: 2, mb: 2 }}>
            <Stack direction="column">
                <Typography sx={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', mt: 3 }} >Title</Typography>
                <TextField label="" placeholder="Title" variant="outlined" value={title} sx={{ marginBottom: 3 }} onChange={(e) => setTitle(e.target.value)}/>
                <Typography sx={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold' }} >Description</Typography>
                <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Write content here!" style={{ background: "white", color: 'black' }} value={description} onChange={(e) => setDescription(e.target.value)}/>

                <Button>Delete</Button>
                <Box sx={{ marginBottom: 1 }}></Box>

            </Stack>

        </Container>

    </>


}