import React from "react";

import registrationForm from '../registrationForm/registrationForm'
import CalendarPage from '../calendar/Calendar'
import ButtonAppBar from '../appHeader/appHeader'
import authForm from '../auhtForm/authForm'

import {Route} from "react-router";
import EventForm from "../eventForm/EventForm";

export  default function Routes() {
    return(
        <>
            <Route exact path={'/regForm'} component={registrationForm}/>
            <Route exact path={'/'} component={ButtonAppBar}/>
            <Route exact path={'/'} component={CalendarPage}/>
            <Route exact path={'/authForm'} component={authForm}/>
            <Route exact path={'/EventForm'} component={EventForm()}/>
        </>
    )
}