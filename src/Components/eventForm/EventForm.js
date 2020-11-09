import React from "react";

import {Container, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';

export default function EventForm() {
    const eventPlaces = [
        {
            title: 'place 1',
        },
        {
            title: 'place 2'
        },
        {
            title: "place 3"
        }
    ]
    return (
        <Container>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >

                <p style={{
                    fontSamily: 'Times New Roman',
                    fontSize: "250%",
                    fontFamily: "Verdana",
                    fontsSize: "11pt",
                }}>
                    addEvent
                </p>

                <Input
                    style={{
                        width: 300,
                        margin: 10
                    }}
                    placeholder={"Название События"}
                    required
                />

                <Autocomplete
                    id={'EventPlace'}
                    options={eventPlaces}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Название места" variant="outlined" />}
                />

                <Input type={"time"}
                       name={"selected time"}
                       list={"time-list"}
                />
            </Grid>
        </Container>
    )

}