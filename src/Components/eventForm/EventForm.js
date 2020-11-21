import React from "react";

import {Container, Input, TextField, TextareaAutosize} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from "@material-ui/core/Button";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function EventForm(props) {
    const userData = props.state.userData

    // Сфера события
    const eventArr = [
        {
            title: 'Maneger 1',
        },
        {
            title: 'Maneger 2'
        },
        {
            title: "Maneger 3"
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



    return (
        <Container>
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
                            width:'40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Input
                            style={{
                                width: 300,
                                margin: 10
                            }}
                            placeholder={"Название Мероприятия"}
                            required
                        />

                        {/*навесить функционал карты*/}
                        <Input
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
                            width:'40%'
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
                            width:'40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        {/*сфера события*/}
                        <Autocomplete
                            id={'eventArr'}
                            options={eventArr}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Сфера события" variant="outlined"/>}
                        />
                        {/*формат события*/}
                        <Autocomplete
                            id={'eventFormat'}
                            options={eventFormat}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Формат события" variant="outlined"/>}
                        />
                        {/*возрастные ограничения*/}
                        <Autocomplete
                            id={'age'}
                            options={age}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Целевая аудитория" variant="outlined"/>}
                        />
                        {/*Время и дата начала*/}
                        <p> Дата и время начала </p>
                        <Input
                            id={'StartDate'}
                            type={"time"}
                            name={"selected time"}
                            list={"time-list"}
                        />
                        <Input
                            id={'StartDate'}
                            type={"date"}
                            name={"selected date"}
                            list={"date-list"}
                        />
                    </Grid>

                    <Grid
                        style={{
                            margin: 10,
                            width:'40%'
                        }}
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        {/*условия участия*/}
                        <Autocomplete
                            id={'Condition'}
                            options={Condition}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Условия участия" variant="outlined"/>}
                        />
                        {/*количество участников*/}
                        <Autocomplete
                            id={'Participants'}
                            options={Participants}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Количество участников" variant="outlined"/>}
                        />
                        {/*Семантические тэги, (9 мая, 8 марта, 23 фераля, новый год и т.п.)*/}
                        <Autocomplete
                            id={'tags'}
                            options={tags}
                            getOptionLabel={(option) => option.title}
                            style={{
                                margin: 10,
                                width: 300
                            }}
                            renderInput={(params) => <TextField {...params} label="Семантические тэги" variant="outlined"/>}
                        />
                        {/*Время и дата окончания*/}
                        <p> Дата и время окончания</p>
                        <Input
                            id={'FinishDate'}
                            type={"time"}
                            name={"selected time"}
                            list={"time-list"}
                        />
                        <Input
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