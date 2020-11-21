import React from "react";

import {Container, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

export default function EventForm() {

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

        // целевая аудитория
    const audience = [
        {
            title: 'audience 1',
        },
        {
            title: 'audience 2'
        },
        {
            title: "audience 3"
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

    return (
        <Container>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >

                <p style={{
                    fontSamily: 'Times New Roman',
                    fontSize: "250%",
                    fontFamily: "Verdana",
                    fontsSize: "11pt",
                }}>
                    Добавить Событие
                </p>

                <Input
                    style={{
                        width: 300,
                        margin: 10
                    }}
                    placeholder={"Название События"}
                    required
                />

                {/*//навесить функционал карты*/}
                <Input
                    style={{
                        width: 300,
                        margin: 10
                    }}
                    placeholder={"Место события"}
                    required
                />

                <Input type={"text"}
                       maxlength="15"
                       name={"text"}
                    style={{
                        width: 300,
                        margin: 10
                    }}

                    placeholder={"Краткое описание"}
                    required
                />

                {/*// сфера события*/}
                <Autocomplete
                    id={'eventArr'}
                    options={eventArr}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Сфера события" variant="outlined" />}
                />

                {/*//формат события*/}
                <Autocomplete
                    id={'eventFormat'}
                    options={eventFormat}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Формат события" variant="outlined" />}
                />

                {/*// целевая аудитория*/}
                <Autocomplete
                    id={'audience'}
                    options={audience}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Целевая аудитория" variant="outlined" />}
                />
                {/*Время и дата начала*/}
                <input value={'Время и дата начала'}/>
                <Input type={"time"}
                       name={"selected time"}
                       list={"time-list"}
                />

                <Input type={"date"}
                       name={"selected date"}
                       list={"date-list"}
                />
                {/*Время и дата окончания*/}
                <input value={'Время и дата окончания'}/>
                <Input type={"time"}
                       name={"selected time"}
                       list={"time-list"}
                />

                <Input type={"date"}
                       name={"selected date"}
                       list={"date-list"}
                />

                {/*// возрастные ограничения*/}
                <Autocomplete
                    id={'age'}
                    options={age}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Целевая аудитория" variant="outlined" />}
                />

                {/*// условия участия*/}
                <Autocomplete
                    id={'Condition'}
                    options={Condition}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Условия участия" variant="outlined" />}
                />

                {/*// организатор, допили автозаполнения с сервера*/}
                <input value={'организатор'}/>
                {/*// телефон организатора, допили автозаполнения с сервера*/}
                <input value={'телефон организатора'}/>
                {/*// элю почта организатора, допили автозаполнения с сервера*/}
                <input value={'Эл. почта организатора'}/>

                {/*// количество участников*/}
                <Autocomplete
                    id={'Participants'}
                    options={Participants}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Количество участников" variant="outlined" />}
                />

                {/*// Семантические тэги, (9 мая, 8 марта, 23 фераля, новый год и т.п.)*/}
                <Autocomplete
                    id={'tags'}
                    options={tags}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Семантические тэги" variant="outlined" />}
                />
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