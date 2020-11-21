import React from "react";
import {Container, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default function registrationForm() {

    //сфера деятельности
    const eventAr = [
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
 return(
     <>
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
                 Регистрация
             </p>
             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 placeholder={"Введите наименование организации"}
                 required
             />
                 <Input
                     style={{
                         width: 300,
                         margin: 10
                     }}
                     type="tel"
                     pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d"
                     placeholder="+7 (###) ###-##-##"
                     required
                 />
             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 type={"email"}
                 placeholder={"Введите адресс эл. почты"}
                 required
             />

             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 placeholder={"Сайт организации"}
             />
             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 placeholder={"Социальные сети"}
             />

             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}//к какой организации принадлежит пользователь
                 placeholder={"Адресс офиса"}
             />

                 {/*// сфера события*/}
                 <Autocomplete
                     id={'eventArr'}
                     options={eventAr}
                     getOptionLabel={(option) => option.title}
                     style={{ width: 300 }}
                     renderInput={(params) => <TextField {...params} label="Сфера события" variant="outlined" />}
                     required
                 />
                 <Input
                     style={{
                         width: 300,
                         margin: 10
                     }}//к какой организации принадлежит пользователь
                     placeholder={"ФИО руководителя"}
                 />
                 <Input
                     style={{
                         width: 300,
                         margin: 10
                     }}//к какой организации принадлежит пользователь
                     placeholder={"ФИО контактного лица"}
                 />
                 Номер Контактного лица
                 <Input
                     style={{
                         width: 300,
                         margin: 10
                     }}
                     type="tel"
                     pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d"
                     placeholder="+7 (###) ###-##-##"
                     required
                 />
                 <Input
                     style={{
                         width: 300,
                         margin: 10
                     }}
                     type={"email"}
                     placeholder={"Введите адресс эл. почты организатора"}
                     required
                 />

             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                type={"password"}
                placeholder={"Введите пароль"}
                required
             />
             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 type={"password"}
                 placeholder={"Введите пороль ещё раз"}
                 required
             />

             </Grid>
             <Grid
                 container
                 direction={'row'}
                 justify={"space-between"}
                 alignItems="center"
             >
                 <Grid
                     item
                 >
                     <Button
                         style={{
                             marginTop: 50,
                             marginLeft: 250
                         }}
                         variant="outlined"
                         color="secondary"
                     >
                         <NavLink
                             to={'/authForm'}
                             style={{
                                 color: '#fff',
                                 textDecoration: 'none',
                             }}
                         > Sign in </NavLink>
                     </Button>
                 </Grid>
                 <Grid
                     item
                 >
                     <Button
                         style={{
                             marginTop: 50,
                             marginRight: 250
                         }}
                         variant={"contained"}
                         color="primary"
                     >
                         Authenticated
                     </Button>
                 </Grid>
             </Grid>

         </Container>
     </>
 )
}
