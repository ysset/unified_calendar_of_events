import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Button, Container} from "@material-ui/core";
import moment from "moment";

import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import {sendSingleDayEventsInformation} from "../../Redux/Actions";

const SingleDayEvents = props => {
    let state = {
        weekendsVisible: true,
        currentEvents: []
    }

    console.log(moment(props.state.singleDayEvents[0].start))

    return(
        <>
            <Container>
                <FullCalendar
                    initialDate={props.state.singleDayEvents[0].start}
                    schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                    plugins={[resourceTimelinePlugin]}
                    initialView='resourceTimeline'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
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
