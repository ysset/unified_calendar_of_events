import React from "react";

import AddNewEventForm from '../addNewEventForm/registrationForm'
import CalendarPage from '../calendar/Calendar'
import ButtonAppBar from '../appHeader/appHeader'

import {Route} from "react-router";

export  default function Routes() {
    return(
        <>
            <Route exact path={'/eventForm'} component={AddNewEventForm}/>
            <Route exact path={'/'} component={ButtonAppBar}/>
            <Route exact path={'/'} component={CalendarPage}/>
        </>
    )
}