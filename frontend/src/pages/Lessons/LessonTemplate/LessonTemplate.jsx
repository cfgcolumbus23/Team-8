import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const lessonTemplate = (props) => {
    const lessonList = props.lessons.map((lesson) => 
        <Button style={{ padding: "0px 100px" }} variant="contained">{lesson}</Button>
    );

    return (
        <Stack spacing={2}>{lessonList}</Stack>
    );
    
}

export default lessonTemplate;