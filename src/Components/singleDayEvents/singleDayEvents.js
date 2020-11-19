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

    console.log(props.state.singleDayEvents)

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
                    resources={[
                        {
                            id: 'sport',
                            title: 'Дворец спорта'
                        }
                    ]}
                    events={props.state.singleDayEvents}
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
