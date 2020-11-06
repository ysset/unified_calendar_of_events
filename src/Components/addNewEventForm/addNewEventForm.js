import React from "react";
import {Container} from "@material-ui/core";

export default function addNewEventForm() {
 return(
     <>
         <Container>
             <input
                 placeholder={"Введите Имя"}
                 required
             />
             <input
                 placeholder={"Введите Фамилию"}
                 required
             />
             <input
                 placeholder={"Введите Отчество"}
             />
             <input
                 type="tel"
                 pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d"
                 placeholder="+7 (###) ###-##-##"
                 required
             />
             <input
                 type={"email"}
                 placeholder={"Введите адресс эл. почты"}
                 required
             />
             <input //к какой организации принадлежит пользователь

             />
             <input
                type={"password"}
                placeholder={"Введите пароль"}
                required
             />
             <input
                 type={"password"}
                 placeholder={"Введите пороль ещё раз"}
                 required

             />
         </Container>
     </>
 )
}