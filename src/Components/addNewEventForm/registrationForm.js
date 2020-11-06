import React from "react";
import {Container, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function registrationForm() {
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
                 placeholder={"Введите Имя"}
                 required
             />
             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 placeholder={"Введите Фамилию"}
                 required
             />
             <Input
                 style={{
                     width: 300,
                     margin: 10
                 }}
                 placeholder={"Введите Отчество"}
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
                 }}//к какой организации принадлежит пользователь

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
                 direction={'column'}
                 alignItems="flex-end"
             >
                 <Button
                     style={{
                         marginTop: 50,
                         marginRight: 250
                     }}
                     variant="outlined"
                     color="primary"
                 >
                     Primary
                 </Button>
             </Grid>
         </Container>
     </>
 )
}