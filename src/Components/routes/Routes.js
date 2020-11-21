import React from "react";

import registrationForm from '../registrationForm/registrationForm'
import CalendarPage from '../calendar/Calendar'
import ButtonAppBar from '../appHeader/appHeader'
import authForm from '../auhtForm/authForm'
import singleDayEvents from "../singleDayEvents/singleDayEvents";

import {Route} from "react-router";
import EventForm from "../eventForm/EventForm";

export  default function Routes() {
    return(
        <>
            <Route path={'/'} component={ButtonAppBar}/>
            <Route exact path={'/regForm'} component={registrationForm}/>
            <Route exact path={'/'} component={CalendarPage}/>
            <Route exact path={'/singleDayEvents'} component={singleDayEvents}/>
            <Route exact path={'/authForm'} component={authForm}/>
            <Route exact path={'/eventForm'} component={EventForm}/>
        </>
    )
}