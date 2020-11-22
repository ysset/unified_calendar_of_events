import React, {useState} from "react";

import {Container, Input, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from "@material-ui/core/Button";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router";

import events from "../events/Events";

function EventForm(props) {

    const [redirect, setRedirect] = useState(false)

    const state = {
        title: '',
        eventPlace: '',
        fullName: props.state.userData.fullName,
        phoneNumber: props.state.userData.userPhone,
        userEmail: props.state.userData.userEmail,
        shortDescription: '',
        resourceId: '',
        formatOfEvent: '',
        auditory: '',
        isFree: '',
        countOfActors: '',
        tags: '',
        startTime: '',
        finishTime: '',
        startDate: '',
        finishDate: ''
    }

    const userData = props.state.userData

    // Сфера события
    const eventArr = [
        {
            title: 'Культура',
        },
        {
            title: 'Спорт'
        }
    ]

    // формат события
    const eventFormat = [
        {
            title: 'Format 1',
        },
        {
            title: 'Format 2'
        },
        {
            title: "Format 3"
        }
    ]

    //возрастные ограничения
    const age = [
        {
            title: 'Без ограничений',
        },
        {
            title: '6+'
        },
        {
            title: "12+"
        },
        {
            title: '16+'
        },
        {
            title: '18+'
        },
    ]

    // условия участия, допиши условие если платно чтобы открывалось окно с ценами
    const Condition = [
        {
            title: 'Бесплатно',
        },
        {
            title: 'По пригласительным'
        },
        {
            title: "Платно"
        }
    ]

    const Participants = [
        {
            title: 'до 50',
        },
        {
            title: '50-100'
        },
        {
            title: "100-500"
        },
        {
            title: "Более 500"
        }
    ]
    // теги
    const tags = [
        {
            title: 'День Победы',
        },
        {
            title: '23 февраля'
        },
        {
            title: "8 марта"
        }
    ]

    const organizerName = userData.fullName !== undefined ? userData.fullName : ''
    const organizerPhone = userData.userPhone !== undefined ? userData.userPhone : ''
    const organizerEmail = userData.userEmail !== undefined ? userData.userEmail : ''

    const handleOnChangeName = (e) => {
        console.log(e.target.value)
        let data = e.target.value
        state.title = data
    }

    const handleOnChangeEvenPlace = (e) => {
        console.log(e.target.value)
        let data = e.target.value
        state.eventPlace = data
    }

    const handleOnChangeShortDescription = (e) => {
        console.log(e.target.value)
        let data = e.target.value
        state.shortDescription = data
    }

    const handleOnChangeResourcedId = (e) => {
        console.log(e.target.innerText)
        let data = e.target.innerText
        state.resourceId = data
    }

    const handleOnChangeFormatOfEvent = (e) => {
        console.log(e.target.innerText)
        let data = e.target.innerText
        state.formatOfEvent = data
    }

    const handleOnChangeAuditory = (e) => {
        console.log(e.target.innerText)
        let data = e.target.innerText
        state.auditory = data
    }

    const handleOnChangeIsFree = (e) => {
        console.log(e.target.innerText)
        let data = e.target.innerText
        state.isFree = data
    }

    const handleOnChangeCountOfActors = (e) => {
        console.log(e.target.innerText)
        let data = e.target.innerText
        state.countOfActors = data
    }

    const handleOnChangeTags = (e) => {
        console.log(e.target.innerText)
        let data = e.target.innerText
        state.tags = data
    }

    const handleOnChangeStartTime = (e) => {
        console.log('StartTime',e.target.value)
        let data = e.target.value
        state.startTime = data
    }

    const handleOnChangeFinishTime = (e) => {
        console.log('FinishTime',e.target.value)
        let data = e.target.value
        state.finishTime = data
    }

    const handleOnChangeStartDate = (e) => {
        console.log('StartDate',e.target.value)
        let data = e.target.value
        state.startDate = data
    }

    const handleOnChangeFinishDate = (e) => {
        console.log('FinishDate',e.target.value)
        let data = e.target.value
        state.finishDate = data
    }

    const onSubmit = () => {
        console.log(state)
        setRedirect(true)
        events.push({
            userEmail: state.userEmail,
            title: state.title,
            start: `${state.startDate}T${state.startTime}`,
            end: `${state.finishDate}T${state.finishTime}`,
            type: 'culture',
            resourceId: state.resourceId === 'Культура' ? 'culture' : 'sport',
            resources: [
                {
                    id: state.resourceId === 'Культура' ? 'culture' : 'sport',
                    title: state.resourceId === 'Культура' ? 'Дворец культуры' : 'Дворец спорта',
                }
            ]
        })
    }

    return (
        <Container>
            {redirect && <Redirect to={'/'}/>}
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >

                <h1 style={{
                    fontsSize: "11pt",
                }}>
                    Добавить Событие
                </h1>

                <Grid
                    container
                    direction={"row"}
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid
                        style={{
                            margin: 10,
                            width: '40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Input
                            onChange={handleOnChangeName}
                            style={{
                                width: 300,
                                margin: 10
                            }}
                            placeholder={"Название Мероприятия"}
                            required
                        />

                        {/*навесить функционал карты*/}
                        <Input
                            onChange={handleOnChangeEvenPlace}
                            style={{
                                width: 300,
                                margin: 10
                            }}
                            placeholder={"Место проведения"}
                            required
                        />
                    </Grid>

                    <Grid
                        style={{
                            margin: 10,
                            width: '40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        {/*организатор, допили автозаполнения с сервера*/}
                        <Input
                            value={organizerName}
                            style={{
                                width: 300,
                                margin: 10
                            }}
                            placeholder={'организатор'}/>
                        {/*/телефон организатора, допили автозаполнения с сервера*/}
                        <Input
                            value={organizerPhone}
                            style={{
                                width: 300,
                                margin: 10
                            }}
                            placeholder={'телефон организатора'}/>
                        {/*/эл.почта организатора, допили автозаполнения с сервера*/}
                        <Input
                            value={organizerEmail}
                            style={{
                                width: 300,
                                margin: 10
                            }}
                            placeholder={'Эл. почта организатора'}/>
                    </Grid>
                </Grid>
                <Grid
                    style={{
                        width: '67%'
                    }}
                >
                    <TextField
                        onChange={handleOnChangeShortDescription}
                        multiline={true}
                        variant={"outlined"}
                        fullWidth={true}
                        placeholder={"Краткое описание"}
                        required
                        InputProps={{
                            step: 150
                        }}
                    />
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        style={{
                            margin: 10,
                            width: '40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        {/*сфера события*/}
                        <Autocomplete
                            onChange={handleOnChangeResourcedId}
                            id={'eventArr'}
                            options={eventArr}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Сфера события" variant="outlined"/>}
                        />
                        {/*формат проведения события*/}
                        <Autocomplete
                            onChange={handleOnChangeFormatOfEvent}
                            id={'eventFormat'}
                            options={eventFormat}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="формат проведения события"
                                                                variant="outlined"/>}
                        />
                        {/*возрастные ограничения*/}
                        <Autocomplete
                            onChange={handleOnChangeAuditory}
                            id={'age'}
                            options={age}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Целевая аудитория"
                                                                variant="outlined"/>}
                        />
                        {/*Время и дата начала*/}
                        <p> Дата и время начала </p>
                        <Input
                            onChange={handleOnChangeStartTime}
                            id={'StartTime'}
                            type={"time"}
                            name={"selected time"}
                            list={"time-list"}
                        />
                        <Input
                            onChange={handleOnChangeStartDate}
                            id={'StartDate'}
                            type={"date"}
                            name={"selected date"}
                            list={"date-list"}
                        />
                    </Grid>

                    <Grid
                        style={{
                            margin: 10,
                            width: '40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        {/*условия участия*/}
                        <Autocomplete
                            onChange={handleOnChangeIsFree}
                            id={'Condition'}
                            options={Condition}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Условия участия"
                                                                variant="outlined"/>}
                        />
                        {/*количество участников*/}
                        <Autocomplete
                            onChange={handleOnChangeCountOfActors}
                            id={'Participants'}
                            options={Participants}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Количество участников"
                                                                variant="outlined"/>}
                        />
                        {/*Семантические тэги, (9 мая, 8 марта, 23 фераля, новый год и т.п.)*/}
                        <Autocomplete
                            onChange={handleOnChangeTags}
                            id={'tags'}
                            options={tags}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Семантические тэги"
                                                                variant="outlined"/>}
                        />
                        {/*Время и дата окончания*/}
                        <p> Дата и время окончания</p>
                        <Input
                            onChange={handleOnChangeFinishTime}
                            id={'FinishTime'}
                            type={"time"}
                            name={"selected time"}
                            list={"time-list"}
                        />
                        <Input
                            onChange={handleOnChangeFinishDate}
                            id={'FinishDate'}
                            type={"date"}
                            name={"selected date"}
                            list={"date-list"}
                        />
                    </Grid>
                </Grid>

                <Grid
                    item
                >
                    <Button
                        style={{
                            marginTop: 25,
                            marginRight: 0
                        }}
                        variant={"contained"}
                        color="primary"
                    >
                        Сохранить
                    </Button>
                </Grid>

                <Grid
                    item
                >
                    <Button
                        onClick={onSubmit}
                        style={{
                            marginTop: 25,
                            marginRight: 0
                        }}
                        variant={"contained"}
                        color="primary"
                    >
                        На модерацию
                    </Button>
                </Grid>

            </Grid>
        </Container>
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
)(EventForm);