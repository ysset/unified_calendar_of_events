import React from "react";

import addNewEventForm from '../addNewEventForm/addNewEventForm'
import CalendarPage from '../calendar/Calendar'

import {Route} from "react-router";

export  default function Routes() {
    return(
        <>
            <Route exact path={'/eventForm'} component={addNewEventForm}/>
            <Route exact path={'/'} component={CalendarPage}/>
        </>
    )
}