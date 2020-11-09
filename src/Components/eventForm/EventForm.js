import React from "react";
import {Container, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function () {

    return (
        <>
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

                    <p>
                    <Input list='<Место проведенеия>'
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        placeholder={"Название События"}
                        required> </Input>
                    </p>
                           <datalist id='<Место проведения>'
                               <option value={"Место1"}></option>
                               <option value={"Место2"}></option>
                               <option value={"Место3"}></option>
                               <option value={"Место4"}></option>
                           </datalist>

                <p>
                    <input type={"time"}
                           name={"selected time"}
                           list={"time-list"}
                    />
                </p>
                        <datalist id={"time-list"}>
                            <option value={"8:00"}></option>
                            <option value={"8:30"}></option>
                            <option value={"9:00"}></option>
                            <option value={"9:30"}></option>
                            <option value={"10:00"}></option>
                            <option value={"10:30"}></option>
                            <option value={"11:00"}></option>
                        </datalist>


                </Grid>

            </Container>

        </>
    )

}