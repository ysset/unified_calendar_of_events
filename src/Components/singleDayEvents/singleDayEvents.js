import React, {useState} from "react";

import FullCalendar from "@fullcalendar/react";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Button, Container} from "@material-ui/core";
import moment from "moment";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import {sendSingleDayEventsInformation} from "../../Redux/Actions";

const SingleDayEvents = props => {

    let state = {
        resources: []
    }
    let dayEvents = props.state.singleDayEvents

    let filterStatus = props.state.filterStatus

    for (let i = 0; i < dayEvents.length; i++) {
        state.resources.push({...dayEvents[i].resources[0]})
    }

    let eventsToDisplay = []

    switch (filterStatus) {
        case true:
            eventsToDisplay.push(...dayEvents.filter(event => event.userEmail === props.state.userData.userEmail))
            break
        case false:
            eventsToDisplay.push(...dayEvents.filter(event => event.eventStatus !== 'Pending'))
            break
        case null:
            eventsToDisplay.push(...dayEvents.filter(event => event.userEmail === props.state.userData.userEmail && event.eventStatus === 'Pending'))
            break
    }
    return(
        <>
            <Container>
                <FullCalendar
                    initialDate={dayEvents[0].start}
                    schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                    plugins={[resourceTimelinePlugin]}
                    initialView='resourceTimeline'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    resources={state.resources}
                    events={eventsToDisplay}
                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                />
            </Container>
        </>
    )
}
const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleDayEvents);
