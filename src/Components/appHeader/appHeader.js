import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {setIsAuth} from "../../Redux/Actions";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                    {/*    <MenuIcon/>*/}
                    {/*</IconButton>*/}
                    <Typography
                        variant="h6"
                        className={classes.title}>
                        <NavLink
                            to={'/'}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                            }}
                        >
                            ЕКС
                        </NavLink>
                    </Typography>
                    {!props.state.isAuth &&
                        <Button color="inherit">
                            <NavLink
                                to={'/authForm'}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            > Sign in </NavLink>
                        </Button>
                    }
                    {props.state.isAuth &&
                        <Button color="inherit">
                            <NavLink
                                to={'/eventForm'}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            > Добавить мероприятие </NavLink>
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
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
)(ButtonAppBar);
