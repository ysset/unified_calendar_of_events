import React from "react";

import moment from "moment";
import "./calendar.css";
import {Box, Button, Container, Grid} from "@material-ui/core";

import events from '../events/Events'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getState} from "../../Redux/Reducer";

import {sendSingleDayEventsInformation} from '../../Redux/Actions'
import {Redirect} from "react-router";

import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SchoolIcon from '@material-ui/icons/School';
import ErrorIcon from '@material-ui/icons/Error';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

class Calendar extends React.Component {
    weekdayshort = moment.weekdaysShort();

    state = {
        showYearTable: false,
        showMonthTable: false,
        showDateTable: true,
        dateObject: moment(), // Текущий месяц(Выбранный в календаре).
        allmonths: moment.months(),
        selectedDay: null,
        currentDayEvents: null,
        redirectToSingleDay: false,
        filter: false,
        width: window.innerWidth,
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

// make sure to remove the listener
// when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };
    year = () => {
        return this.state.dateObject.format("Y");
    };
    currentDay = () => {
        return this.state.dateObject.format("D");
    };
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
        return firstDay; // С какого дня недели начинается месяц
    };
    month = () => {
        return this.state.dateObject.format("MMMM");
    };
    showMonth = (e, month) => {
        this.setState({
            showMonthTable: !this.state.showMonthTable,
            // showDateTable: !this.state.showDateTable
        });
    };
    setMonth = month => {
        let monthNo = this.state.allmonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject); // Копирует объект
        dateObject = moment(dateObject).set("month", monthNo);
        console.log(moment(dateObject).month())
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            // showDateTable: !this.state.showDateTable
        });
    };
    MonthList = props => {
        console.log('here')
        let months = [];
        props.data.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setMonth(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let monthlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                <tr>
                    <th colSpan="4">Select a Month</th>
                </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    };
    showYearTable = e => {
        this.setState({
            showYearTable: !this.state.showYearTable,
            // showDateTable: !this.state.showDateTable
        });
    };

    onPrev = () => {
        let curr = "";
        if (this.state.showYearTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.subtract(1, curr)
        });
    };
    onNext = () => {
        let curr = "";
        if (this.state.showYearTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.add(1, curr)
        });
    };
    setYear = year => {
        // alert(year)
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showYearTable: !this.state.showYearTable
        });
    };
    onYearChange = e => {
        this.setYear(e.target.value);
    };

    getDates(startDate, stopDate) {
        let dateArray = [];
        let currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }

    YearTable = props => {
        let months = [];
        let nextten = moment()
            .set("year", props)
            .add("year", 12)
            .format("Y");

        let tenyear = this.getDates(props, nextten);

        tenyear.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setYear(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let yearlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                <tr>
                    <th colSpan="4">Select a Year</th>
                </tr>
                </thead>
                <tbody>{yearlist}</tbody>
            </table>
        );
    };
    onDayClick = (e, d, currentMonthEvents) => {
        this.setState(
            {
                selectedDay: d
            },
            () => {
                this.state.currentDayEvents = []
                console.log("SELECTED DAY: ", this.state.selectedDay);
                currentMonthEvents.map((event) => {
                    if (event !== null && this.state.selectedDay === moment(event.start).date()) {
                        this.state.currentDayEvents.push(event)
                        console.log(this.state.currentDayEvents)
                    }
                })
                this.props.sendInfo(this.state.currentDayEvents, this.state.filter)
                this.state.currentDayEvents[0] !== undefined &&
                this.setState({
                    redirectToSingleDay: true
                })
            }
        );
    };

    handleSwitchFilterTrue = () => {
        this.setState({
            filter: true
        })
    }
    handleSwitchFilterFalse = () => {
        this.setState({
            filter: false
        })
    }
    handleSwitchFilterNull = () => {
        this.setState({
            filter: null
        })
    }

    render() {

        let weekdayshortname = this.weekdayshort.map(day => {
            console.log(day)
            return <th
                className={'week-day'}
                key={day}><span>{day}</span></th>;
        });
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        let daysInMonth = [];
        //============================================
        let currentMonthEvents = events
            .map((eventDate) => {
                //2020-11-01T10:30:00 шаблон времени
                return moment(eventDate.start).month() === moment(this.state.dateObject).month() ? eventDate : null
            })
            .filter(e => e !== null)

        for (let d = 1; d <= this.daysInMonth(); d++) {
            // let currentDay = d == this.currentDay() ? "today" : "";
            // let currentDayEvent = []
            //     currentDayEvent.push(currentMonthEvents.map(event => {
            //         if (event !== null && moment(event.start).date() === d) {
            //             return event
            //         }
            // }))
            // console.log('day:',d, currentDayEvent)
            daysInMonth.push(
                <td
                    style={{
                        width: '10%',
                        paddingRight: 5,
                        paddingLeft: 5,
                        border: 1,
                        borderColor: "red",
                    }}
                    key={d}>
                    <Grid
                        container
                        direction={"column"}
                        alignItems={"center"}
                        style={{
                            height: '100%',
                            borderColor: "black",
                            border: 2
                        }}
                        onClick={e => {
                            this.onDayClick(e, d, currentMonthEvents);
                        }}
                    >
                        <span>{d}</span>
                        <p
                            style={{
                                width: "auto"
                            }}
                        >
                            {
                                currentMonthEvents.map(event => {
                                    switch (this.state.filter) {
                                        case false:
                                            if (d === moment(event.start).date()) {
                                                if (event.resourceId === 'sport' && event.eventStatus !== 'Pending') {
                                                    return <DirectionsRunIcon/>
                                                }
                                                if (event.resourceId === 'culture' && event.eventStatus !== 'Pending') {
                                                    return <SchoolIcon/>
                                                }
                                            }
                                            break
                                        case true:
                                            if (
                                                d === moment(event.start).date()
                                                && event.userEmail !== undefined
                                                && event.userEmail === this.props.state.userData.userEmail
                                            ) {
                                                if (event.eventStatus === 'Pending') {
                                                    return <ErrorIcon style={{
                                                        color: "green"
                                                    }}/>
                                                }
                                                if (event.resourceId === 'sport') {
                                                    return <DirectionsRunIcon/>
                                                }
                                                if (event.resourceId === 'culture') {
                                                    return <SchoolIcon/>
                                                }
                                            }
                                            break
                                        case null:
                                            if (
                                                d === moment(event.start).date()
                                                && event.eventStatus !== undefined
                                                && event.eventStatus === 'Pending'
                                                && event.userEmail !== undefined
                                                && event.userEmail === this.props.state.userData.userEmail
                                            ) {
                                                if (event.resourceId === 'sport') {
                                                    return <DirectionsRunIcon/>
                                                }
                                                if (event.resourceId === 'culture') {
                                                    return <SchoolIcon style={{
                                                        color: "green"
                                                    }}/>
                                                }
                                            }
                                            break
                                    }
                                })
                            }
                        </p>
                    </Grid>
                </td>
            );
        }
        //============================================
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                // let insertRow = cells.slice();
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });
        console.log(events)

        return (
            <>
                <Grid className={'main-grid'}>
                    <Grid
                        className={'view-buttons-grid'}
                    >
                        {this.props.state.isAuth &&
                        <>
                            <Button
                                style={{
                                    margin: 10
                                }}
                                variant={"contained"}
                                onClick={this.handleSwitchFilterFalse}
                            >
                                Все мероприятия
                            </Button>
                            <Button
                                style={{
                                    margin: 10
                                }}
                                variant={"contained"}
                                onClick={this.handleSwitchFilterTrue}
                            >
                                Ваши мероприятия
                            </Button>
                            <Button
                                style={{
                                    margin: 10
                                }}
                                variant={"contained"}
                                onClick={this.handleSwitchFilterNull}
                            >
                                На соглосовании
                            </Button>
                        </>
                        }
                    </Grid>

                    <Container className={'calendar-container'}>
                        {this.state.redirectToSingleDay && <Redirect to={'/singleDayEvents'}/>}
                        <div className="tail-datetime-calendar">
                            <div className="calendar-navi">
                        <span
                            onClick={e => {
                                this.onPrev();
                            }}
                            className="calendar-button button-prev"
                        />
                                {/*{!this.state.showMonthTable && (*/}
                                <span
                                    onClick={e => {
                                        this.showMonth();
                                    }}
                                    className="calendar-label"
                                >
                                {this.month()}
                            </span>
                                {/*)}*/}
                                <span className="calendar-label" onClick={e => this.showYearTable()}>
                            {this.year()}
                        </span>
                                <span
                                    onClick={e => {
                                        this.onNext();
                                    }}
                                    className="calendar-button button-next"
                                />
                            </div>

                            <div className="calendar-date">
                                {this.state.showYearTable && <this.YearTable props={this.year()}/>}
                                {this.state.showMonthTable && (
                                    <this.MonthList data={moment.months()}/>
                                )}
                            </div>

                            {this.state.showDateTable && (
                                <div className="calendar-date">
                                    <Table
                                        cellpadding="10"
                                        rules="rows"
                                        border="1"
                                        width="80%"
                                        className="calendar-day"
                                    >
                                        <TableHead>
                                        <tr>{weekdayshortname}</tr>
                                        </TableHead>
                                        <TableBody>{daysinmonth}</TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    </Container>
                </Grid>

            </>
        );
    }
}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
    sendInfo: (crDay, filter) => dispatch(sendSingleDayEventsInformation(crDay, filter))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);