import React from "react";
import Grid from "@material-ui/core/Grid";
import {Container, Input} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {NavLink, Redirect} from "react-router-dom";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {sendSingleDayEventsInformation} from "../../Redux/Actions";
import {connect} from "react-redux";
import {setIsAuth} from '../../Redux/Actions'

function Auth(props) {

    let propsUserData = props.state.userData
    let isAuth = props.state.isAuth

    let state = {
        userEmail: '',
        password: ''
    }
    const handleChangePass = (e) => {
        state.password = e.target.value
    }
    const handleChangeEmail = (e) => {
        state.userEmail = e.target.value
        console.log(state)
    }

    const onSignInClick = () => {
        if (state.password === propsUserData.password && state.userEmail === propsUserData.userEmail) {
            props.setIsAuth(true)
        }
    }

    return (
        <>
            {isAuth && <Redirect to={'/'}/>}
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                >
                    <p style={{
                        fontSize: "250%",
                        fontsSize: "11pt",
                    }}>
                        Авторизация
                    </p>
                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        onChange={handleChangeEmail}
                        placeholder={"Введите адрес эл. почты"}
                        required
                    />

                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        type={'password'}
                        onChange={handleChangePass}
                        placeholder={"Введите пароль"}
                        required
                    />
                    <Grid
                        container
                        direction={"row-reverse"}
                        justify={"space-around"}
                    >
                        <Button
                            style={{
                                marginTop: 50,
                                marginRight: 215
                            }}
                            variant="contained"
                            color="primary"
                            onClick={onSignInClick}
                        >
                            Sign in
                        </Button>

                        <Button
                            style={{
                                marginTop: 50,
                                marginLeft: 250
                            }}
                            variant={"outlined"}
                            color="secondary"
                        >
                            <NavLink
                                to={'/regForm'}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            > Registration </NavLink>
                        </Button>

                    </Grid>
                </Grid>
            </Container>
        </>

    )
}
const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
    setIsAuth: (e) => dispatch(setIsAuth(e))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);