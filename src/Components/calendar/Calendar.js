import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import {Container} from "@material-ui/core";
import interactionPlugin from "@fullcalendar/interaction"

import events from "../events/Events";

import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/timegrid/main.css"

function handleDateClick(arg) {
    console.log(arg)
}



export default function Calendar() {
    return(
        <>
            <Container style={{
                paddingTop: 20
            }}>
                <FullCalendar
                    defaultView='dayGridMonth'
                    headerToolbar={{
                        start: "prev,next",
                        center: "title",
                        end: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    footerToolbar={true}
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    eventClick={handleDateClick} // on event click
                    dateClick={handleDateClick} // on date click
                    selectable={true}
                    selectMirror={true}
                    events={events}
                    locale={'ru'}
                />
            </Container>
        </>
    )
}