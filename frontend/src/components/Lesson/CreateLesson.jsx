import { Button, Stack } from "@mui/material";
import { Component } from "react";
import { EditSlide } from "./EditSlide";






export class CreateLesson extends Component {

    constructor(props) {

        super(props);

        this.state = {
            slides: this.props.slides ? this.props.slides : [{
                title: "title",
                description: "description",
                // id: "id"
            },
            {
                title: "title",
                description: "description",
                // id: "id"
        }]
        };

    }




    render() {


        return <>
         {/* {this.state.slides.map(slide => <EditSlide {...slide}/>)} */}
            <Stack direction="column" style={{ width: '100%', height: '100%' }}>

            {this.state.slides.map(slide => <EditSlide {...slide}/>)}
                {/* {this.state.slides.map(slide => <EditSlide {...slide}/>)} */}
                {/* <Button variant="contained">Create New Slide</Button> */}
                <Button variant="contained" sx={{ mt: 1 }}>Create New Slide</Button>
            </Stack>
                {/* <Button variant="contained">Create New Slide</Button> */}

 
        </>




    }


}